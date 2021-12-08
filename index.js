const express = require('express');
const server = express();
const cors = require('cors');
const { application } = require('express');

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    server.use(cors());
    next();
});
server.get('/usuario', (req,res) => {
 return res.json({usuario: 'SEU VENCIMENTO VAI VENCER NAO ESQUEÇA'})
});

server.listen(3000,() =>{
 console.log('servidor ok')
});
