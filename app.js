const express = require('express');
const planetRouter = require('./src/routes/planetsRouter');
const mongoose = require('mongoose');

const app = express();
const url = 'mongodb+srv://alan_chefe:eusouobatman@cluster0-rxlvv.mongodb.net/test?retryWrites=true&w=majority'
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
  console.log('Conectado ao banco de dados produtosdb MongoDB.')
});
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.listen(3000, function () {
  console.log('Servidor escutando na porta 3000');
});

app.use('/planets', planetRouter);