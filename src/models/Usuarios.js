/*
  PAGINA RESPONSAVEL POR CRIAR O MODELO DE INSERÇAO DE USUARIOS 
*/
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');



// Definindo o modelo de Usuarios

const UserSchema = new mongoose.Schema({
  name: { // NOME

    type: String,
    required: true, // Define o campo Obrigatorio
    uppercase: true, // Salva o campo em letra MAIUSCULAS
    minlength: 3, // Define que o minimo de caracter aceito
    maxlength: 100, // Define que o maximo de caracter aceito
  },
  registration: { // MATRICULA

    type: Number,
    required: true, // Define o campo Obrigatorio
    min: 1, // Define campo tipo NUMBER com minimo de digito
    max: 9999, // Define compo tipo NUMBER com o maximo de digito 
    unique: true, // define que pode ser repetido
  },
  active: { // ATIVO

    type: Boolean,
    default: true, // Define que o campo por padrao sera o valor definido
    required: true, // Define o campo Obrigatorio
  },
  address: { // ENDEREÇO

    city: { // CIDADE
      type: String,
      required: true, // Define o campo Obrigatorio
      minlength: 3, // Define que o minimo de caracter aceito
      maxlength: 100, // Define que o maximo de caracter aceito
    },
    state: {//ESTADO
      type: String,
      required: true, // Define o campo Obrigatorio
      minlength: 2, // Define que o minimo de caracter aceito
      maxlength: 2, // Define que o maximo de caracter aceito
    },
  },
  record: {//REGISTO
    type: Date,
    default: Date.now, // Define que o valor padrao é a hora atual
  }

});

UserSchema.plugin(mongoosePaginate);

// Define que o model definido a cima vai se chamar USUARIOS
mongoose.model('Usuario', UserSchema);