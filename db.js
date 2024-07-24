//Importat a biblioteca mysql2 e criar a conexão com o banco de dados
const mysql = require('mysql2'); //importa o mysql2 para conectar 

const db = mysql.createConnection({
    host:process.envDB_HOST, //Endereço do servidor do Banco de Dados
    user:process.envDB_USER, //Nome de Usuário para acessar o Bnaco de Dados
    password:process.env.DB_PASS, //Senha do usuário para acessar o Banco de Dados
    database:process.env.DB_NAME //Nome do Banco de Dados
});

db.connect((err) => {
    if(err) {
        console.log('Erro ao conectar ao Banco de Dados', err); //Exibe a mensagem de erro
    return;
}
    console.log('Conectado ao Banco de Dados MySQL'); //Exibe a mensagem de sucesso
});

module.exports=db; //Exporta a conexão para ser usada em outros arquivos