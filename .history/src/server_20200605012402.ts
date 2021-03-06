import express from 'express';

const app = express();

app.use(express.json()); // instrui o express a usar a linguagem JSON

//Rota: endereço completo da requisição (localhost:3333/users)
//Recurso: Qual entidade estamos acessando do sistema (/users)

// HTTP Requests:
// GET: Busca informações do Back-end
// PUT: Atualiza uma informação no Back-end
// POST: Cria uma nova informação no Back-end
// DELETE: Remove informação no Back-end

// POST http://localhost:3333/users => criar usuário
// GET http://localhost:3333/users => listar usuários
// GET http://localhost:3333/users/5 => buscar usuário com ID = 5

// Request Params: Parametros que vem na propria rota que dentificam um recurso
// Query Params: Parametros opcionais para filtros e paginação, etc.. :: http://localhost:3333/users?search=Lu
// Request Body: Parametros para criação e atualização de informações

const users = [
  'Ricardo',
  'Lucas',
  'Ana Luiza',
  'Adriane',
  'Fátima',
  'Marcel'
];


app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers);  // o return quebra a execução e retorna os dados
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);

});

app.post('/users', (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email
  };

  return response.json(user);

});

app.listen(3333);

