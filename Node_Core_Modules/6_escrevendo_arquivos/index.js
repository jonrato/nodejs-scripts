const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name;

    if(!name){
        fs.readFile('./index.html', function(err, data){
            console.log(data)
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(toString(data));
            return res.end();
        })
    }else{

    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})