import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Users List');
  response.send('Hello World');
});

app.listen(3333);

