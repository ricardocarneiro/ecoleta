import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'squlite3';
  connection: {
    filename: path.resolve();
  },
});
