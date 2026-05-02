const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});