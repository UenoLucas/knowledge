module.exports = middleware => {
    return (req, res, next) => {
        if(req.user.admin){ //só chamamos o middleware se o usuário for adm
            middleware(req, res, next)
        } else{
            res.status(401).send('Usuário não é administrador')
        }
    }
}