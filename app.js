let http = require('http');

http.createServer(function(req, res){
    res.end("Voce entrou no meu servidor"); 
}).listen(8081);

//createServer() serve para criar o servidor no node, já o método listen() serve para indicar a porta que voce quer abrir o seu servidor

console.log('O servidor rodando')