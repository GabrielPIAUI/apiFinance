const { query } = require('express');
const db = require('../config/db'); //Importar a conexão com o Banco de Dados

//Função para obter todas as transações
const getAllTransactions = (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
        if(err) {
            console.error('Erro ao obter transações', err);
            res.status(500).send('Erro ao obter transações');
            return;
        }
        res.json(results);
    });
};

//Função para adicionar uma nova transação
const addTransactions = (req, resu) => {
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'INSERT INTO transactions(date, amount, description, category, account, user_id) VALUES(?,?,?,?,?,?)', 
        [date, amount, description, category, account, user_id],
        (err, res) => {
            if(err) {
                console.error('Erro ao adicionar transação', err)
                res.status(500).send('Erro ao adicionar transação')
                return;
            }
            resu.status(201).send('Transação adicionada com sucesso')
        }
    );
};

//Função para atualizar uma transação existente (substituição completa)
const updateTransactionPut = (req, res) => {
    const{id} = req.params;
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
    'UPDATE transactions SET date= ?, amount=?, description=?, category=?, account=?, user_id=? where id=?',
    [date, amount, description, category, account, user_id, id],
    (err, results) => {
        if(err) {
            console.error('Erro ao atualizar transação', err);
            res.status(500).send('Erro ao atualizar transação');
            return;
}
    res.send('Transação atualizada com sucesso');
}
)
};

//Função para atualizar uma transação existente (substituição completa)
const updateTransactionPatch = (req, res) => {
    const{id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];

    for(const[key, value] of Object.entries(fields)) {
        query.push(`${key} = ?`);
        values.push(value);
        }

    values.push(id);

    db.query(
    `UPDATE transactions SET ${query.join(',')} WHERE id = ?`,
    values,
    (err, results) => {
        if(err) {
            console.error('Erro ao atualizar transação', err);
            res.status(500).send('Erro ao atualizar transação');
            return;
        }
    res.send('Transação atualizada com sucesso');
    }
    )
}

//Função para deletar  uma transação existente

const deleteTransaction = (req, res) => {
    const{id} = req.body;
    db.query(
        'DELETE FROM transactions WHERE id = ?', [id],
        (err, results) => {
            if(err) {
                console.error('Erro ao deletar transação', err);
                res.status(500).send('Erro ao deletar transação');
                return;
            }
        res.send('Transação deletada com sucesso');
        }
    );
};


module.exports = {
    getAllTransactions,
    addTransactions,
    updateTransactionPut, 
    updateTransactionPatch,
    deleteTransaction
}