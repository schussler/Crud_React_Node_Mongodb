const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express()

app.use(express.json()) // Diz que permite usar dados em formato JSON
app.unsubscribe(cors())

// TODO => Criar uma pasta para esconder a conexao com o banco de dados
// mongoose.connect('mongodb://127.0.0.1:27017/curso');
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/curso');
    console.log('\x1b[32;1mConexão com o banco de dados estabelecida com sucesso!\x1b[0m');
    // Aqui você pode adicionar o código adicional que depende da conexão do banco de dados
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

// Chamada da função para conectar ao banco de dados
connectToDatabase();

// Informa que os models estao nesse caminho
requireDir('./src/models')

// Informa o caminho da rota
app.use('/sistema', require('./src/routes/Routes'))

// Informa a rota que sera usada => DEPOIS PODE USAR UM METODO PARA USAR A PORTA PADRAO DO DEPLOY
// Configuração do servidor
const port = 3005;

try {
  app.listen(port, () => {
    console.log('\n' + `\x1b[32;1mServidor rodando na porta ${port}\x1b[0m
      `);
  });
} catch (error) {
  console.error(`Ocorreu um erro ao iniciar o servidor: ${error}`);
}