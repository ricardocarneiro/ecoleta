import express from 'express';

const app = express();

app.use(express.json()); // instrui o express a usar a linguagem JSON

app.get('/', (request, response) => {

  return response.json({ message: 'Hello World'});

});

app.listen(3333);

