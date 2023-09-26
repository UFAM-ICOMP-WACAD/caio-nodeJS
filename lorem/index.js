import * as http from 'http';
import 'dotenv/config'
import { promises as fsPromises } from 'fs';

const PORT = process.env.PORT ?? 5577 

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8"});

        const readFile = async (filePath) => {
            try {
                return await fsPromises.readFile(filePath, 'utf8');
            } catch(err) {
                console.log(err);
            }
        };
        const index = readFile("./lorem/index.html").then( (data) => {
            res.write(data);
            res.end()
        }).catch((error) => {
            console.log(error);
        });
    } else if (req.url === "/style.css"){
        res.writeHead(200, { "Content-Type": "text/css;charset=utf-8"});

        const readFile = async (filePath) => {
            try {
                return await fsPromises.readFile(filePath, 'utf8');
            } catch(err) {
                console.log(err);
            }
        };
        const style = readFile("./lorem/style.css").then( (data) => {
            res.write(data);
            res.end()
        }).catch((error) => {
            console.log(error);
        });
    } else if (req.url.startsWith("/favicon")){
        res.end("favicon");
    } else if (req.url === "/loremGenerator.js"){
        res.writeHead(200, { "Content-Type": "text/js;charset=utf-8"});

        const readFile = async (filePath) => {
            try {
                return await fsPromises.readFile(filePath, 'utf8');
            } catch(err) {
                console.log(err);
            }
        };
        const loremG = readFile("./lorem/loremGenerator.js").then( (data) => {
            res.write(data);
            res.end()
        }).catch((error) => {
            console.log(error);
        });
    }
})

server.listen(PORT, () => {
    console.log(`servidor iniciado na porta: ${PORT}`);
})