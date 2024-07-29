const bd = require('../config/db'); //Importar a conexão com o Banco de Dados

//Função para obter todas as transações
const getAllTransactions = (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
        if(err) {
            console.error('Erro ao obter transações', err);
            res.status(500).send('Erro ao obter transações');
            return;
        }
        res.json(results);
    })
}

module.exports = {
    getAllTransactions
}