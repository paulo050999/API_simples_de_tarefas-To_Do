# 🚀 API Simples de Tarefas (To-Do) - DevOps Project

Este projeto é uma API simples de gerenciamento de tarefas desenvolvida com Node.js, com foco em aplicar conceitos de Cloud e DevOps.

## 📌 Objetivo

Demonstrar na prática:

- Criação de API REST
- Containerização com Docker
- Integração Contínua (CI) com GitHub Actions
- Versionamento com GitHub

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- Docker
- GitHub Actions

---

## 📂 Funcionalidades

- Listar tarefas (GET /tasks)
- Criar tarefas (POST /tasks)

---

## ▶️ Como rodar o projeto

### 🔹 Rodando localmente

-- bash
- npm install
- node app.js

Acesse: \"http://localhost:3000/tasks"

---

###🔹 Rodando com Docker

docker build -t devops-app .
docker run -p 3000:3000 devops-app

Acesse: \"http://localhost:3000/tasks"

---

##⚙️ CI/CD

O projeto possui pipeline configurado com GitHub Actions, que executa automaticamente:

Instalação de dependências
Execução da aplicação (teste simples)

---

##🚧 Melhorias futuras

- Adicionar banco de dados
- Criar testes automatizados
- Implementar deploy em cloud (AWS)
- Melhorar estrutura da API

---

##👨‍💻 Autor

Desenvolvido por Paulo Douglas
