require('./dotenv');
module.exports = {

  development: {
    client: 'mysql',
      connection: {
        host : "localhost",
        user : "root",
        password : "1234",
        database : "test"
      }
  }

};