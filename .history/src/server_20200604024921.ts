import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Users List');

  response.json([
    'Ricardo',
    'Lucas',
    'Ana Luiza',
    'Adriane',
    'Fátima'
  ]);
});

app.listen(3333);

