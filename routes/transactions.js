const express = require('express'); //Importar a framework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); //Importar o controlador 

//Definir uma rota para obter todas as transações
router.get('/', transactionsController.getAllTransactions);

//Definir uma rota para adiconar uma nova transação
router.post('/', transactionsController.addTransactions);



//Exportando o roteador
module.exports = router;

