const http = require('http');
const fs = require('fs');
require('dotenv').config({ path: '.env'}); //npm install dotenv

if (process.argv.length < 3) {
    throw new Error("invalido");
}

const PORT = process.env.PORT ?? 5566 
const dir = process.argv[2];

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8"});
    fs.readdir(dir, (err, files) => { //Callback é sincrono, já o readdir, não
        if (err)
          throw new Error(err);
        else {
          files.forEach(file => {
            response.write(`${file} <br>`);
        })
        response.end();
        }
    })
})

server.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`);
});