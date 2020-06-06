import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Users List');

  response.json([
    'Ricardo',
    'Lucas',
    'Ana Luiza'
  ]);
});

app.listen(3333);

