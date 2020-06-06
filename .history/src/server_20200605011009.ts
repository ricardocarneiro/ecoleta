import express from 'express';

const app = express();

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
// Query Params: Parametros opcionais :: http://localhost:3333/users?search=Lu
const users = [
  'Ricardo',
  'Lucas',
  'Ana Luiza',
  'Adriane',
  'Fátima'
];


app.get('/users', (request, response) => {
  const search = String(request.params.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(users);  // o return quebra a execução e retorna os dados
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);

});

app.post('/users', (request, response) => {
  const user = {
    name: 'Ricardo',
    email: 'rcarneiro@gmail.com'
  };

  return response.json(user);

});

app.listen(3333);

