const express = require('express');
const cors = require('cors') //determina quem vai poder acessar a nossa aplicação
const routes = require('./routes');

const app = express();

/*
app.use(cors({
    origin: 'http://www.meuapp.com.br'; //para publicar o app esse eh o endereço que vai poder acesso o nosso app
}));
*/
app.use(cors()); //desenvolvimento
app.use(express.json());
app.use(routes);

app.listen(3333); //manda a aplicação ouvir a porta 3333, escolhemos essa porta por ser uma porta diferente

/**
Rota / Recurso (entidade)
**/
/**
 * Métodos Http:
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma inforamção no back-end
 */

 /**
  * Tipos de Parametros
  * Query params: parametros nomeados enviados na rota após o símbolo da "?"
  * em paginação, filtro, etc
  * Route params: Parâmetros  utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Banco de Dados
   * SQL: MySQL, SQLite, SQL Server, Oracle, etc
   * NoSQL: MongoDB, CouchDB, 
   */

   /**
    * Driver: Select * From User (desta forma 'tradicional' existem diferenças entre os diversos bancos sql, como mysql e server por exemplo)
    * Query Builder: Usa uma sintaxe universal. Ex: table('users').select('*').where() parecido com linq/lambda do c# 
    * Vamos usar o Knex.JS
    */


