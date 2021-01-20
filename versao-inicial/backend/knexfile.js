// Update with your config settings.
//configuracao do banco de dados
// const { db } = require('./.env') //com as chaves passamos somente o atributo do arquivo .env
module.exports = {
 
  client: 'postgresql',
  connection: {
    host : '127.0.0.1',
    port: 5432,
    database: 'knowledge',
    user: 'postgres',
    password: '4321'
},
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
