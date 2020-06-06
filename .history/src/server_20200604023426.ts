import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Users List');
});

app.listen(3333);

