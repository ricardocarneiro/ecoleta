import express from 'express';

const app = express();

app.get('/users', () => {
  console.log('Users List');
});

app.listen(3333);

