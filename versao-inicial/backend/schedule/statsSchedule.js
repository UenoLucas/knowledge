//Esse arquivo tem o papel de atualizar as estatisticas do sistema de tempo em tempo
const schedule = require('node-schedule')

module.exports = app => {
    //esse padrao significa de 1 em 1 minuto, pesquisar node schedule, basicamente cada asterisco significa uma marcação de tempo
    schedule.scheduleJob('*/1 * * * *', async function(){
        const usersCount = await app.db('users').count('id').first() //conta o primeiro registro de uma tabela
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()
    
        const { Stat } = app.api.stat

        const lastStat = await Stat.findOne( {}, {}, 
            { sort: { 'createAt': -1 }})

        const stat = new Stat({
            users: usersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createAt: new Date()
        })
        //aqui comparamos se a estatistica mudou em relaçào a anterior e persistimos
        const changeUsers = !lastStat || stat.users !== lastStat.users
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changeArticles = !lastStat || stat.articles !== lastStat.articles

        if(changeUsers || changeCategories || changeArticles){
            stat.save().then(() => console.log('[Stats] Estatísticas atualizadas com sucesso'))
        }
    }) 
}