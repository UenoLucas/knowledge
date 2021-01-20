//aqui faremos o sistema para a autenticação de usuário e senha (login)
const { authSecret } = require('../.env')
const jwt = require('jwt-simple') //necessitamos desse jwt e o authSecret para gerar o token
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password){
            return res.status(400).send('Informe email e senha!')
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (!user) return res.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const now = Math.floor(Date.now() / 1000) //isso dá quanto tempo em segundos se passou desde a data de referência da função (1979) assim podemos dar o tempo de vida para o token adicionando tempo em segundos
    
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3) //token válido por 3 dias, quando vc entra no sistema vc fica logado por 3 dias, exemplo moodle fica pouco tempo
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null //caso body n venha setado vai ser nulo
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) { //token ainda está válido
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    }

    return { signin, validateToken }
}