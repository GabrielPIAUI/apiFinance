const express = require('express'); //Importar a framework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); //Importar o controlador 
const authMiddleware = require('../middlewares/authMiddleware'); //Importa o middleware de autenticação

//Definir uma rota para obter todas as transações (protegida)
router.get('/', authMiddleware, transactionsController.getAllTransactions);

//Definir uma rota para adiconar uma nova transação (protegida)
router.post('/', authMiddleware, transactionsController.addTransactions);

//Definindo uma rota para atualizar uma transação existente(substituição completa)
router.put('/:id', authMiddleware, transactionsController.updateTransactionPut);

//Definindo uma rota para atualizar uma transação existente(substituição parcial) (protegida)
router.patch('/:id', authMiddleware, transactionsController.updateTransactionPatch);

//Definindo uma rota para deletar uma transação (protegida)
router.delete('/:id', authMiddleware, transactionsController.deleteTransaction);


//Exportando o roteador
module.exports = router;

