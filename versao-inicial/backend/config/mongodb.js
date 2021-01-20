const mongoose = require('mongoose') //biblioteca objeto documento
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
.catch(e => {
    const msg = 'Não foi possível conectar com mongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m') //node colors, isso vai dar um destaque no console quando o backend n conseguir se conectar com o MongoDb
})