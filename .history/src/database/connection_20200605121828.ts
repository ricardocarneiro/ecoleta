import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'squlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')  //__dirname variavel global que aponta para a pasta database
  },
});

export default connection;
