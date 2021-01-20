//estatisticas do backend
module.exports = app => {
    const Stat = app.mongoose.model( 'Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    //agora criamos um metodo para pegar a estatistica mais recente do banco de dados
    const get = (req ,res) => {
        //agora acessamos stat
        Stat.findOne({}, {}, {sort: {'createAt': -1}}) //ordena e pega a última estatistica
        .then(stat => {
            const defaultStat = {
                users: 0,
        categories: 0,
        articles: 0
            }
            res.json(stat || defaultStat )
        }) //entao enviamos em json para o nosso frontend
    }

    return { Stat, get }
}