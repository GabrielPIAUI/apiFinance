//Importar as bibliotecas
const express = require('express'); //importa o framework Express
const dotEnv = require('dotenv'); //importa o pacote dotenv para gerenciar váriaveis de ambiente
const cors = require('cors'); //importar o pacote cors para permitir requisições de diferentes origens
const bodyParser = require('body-parser') //importa o pacote body-parser para analisar o corpo das requisições HTTP


//Configurar as Variáveis de ambiente
dotEnv.config(); //Carrega as variáveis definidas no arquivo '.env' para process.env(processos)


//Inicializar nova aplicação Express
const app = express();


//configurar o CORS e o body-parse
app.use(cors()); //habilita o cors para todas as rotas
app.use(bodyParser.json()); //configura o body-parser para analisar requisições JSON


//Rota Inicial para testar o servidor
app.get('/',(req, res)=> {
    res.send("Servidor está rodando"); //definir uma rota para testar o servidor
});

//Configurar o servidor para uma porta específica
const PORT = process.env.PORT || 3000; //Define a porta a partir da variável de ambiente ou usa a porta 3000 como porta padrão
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`); //Envia uma mensagem informando que o servidor está rodando na '$PORT' em que estiver no momento
});