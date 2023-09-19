import * as http from 'http';
import * as fs from 'fs';

import 'dotenv/config'

if (process.argv.length < 3) {
    throw new Error("invalido");
}

const PORT = process.env.PORT ?? 5566 
const dir = process.argv[2];

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    fs.readdir(dir, (err, files) => {
        if (err) throw new Error(err);
        else {
            console.log(dir);
            console.log(files);
            files.forEach(file => {
                response.write(file);
                response.write('<br>');
            })
            response.end();
        }
    })
})

server.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`);
});