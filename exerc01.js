import * as http  from 'http';
import * as fs from 'fs';
//const str_helpers = require("./strings_helper"); //destructuring const { upper } = ... puxa só uma
//const createLink = require("./createLink");
import { createLink, createReturn } from './createLink.js';

import 'dotenv/config'
//require('dotenv').config({ path: '.env'}); //npm install dotenv

if (process.argv.length < 3) {
    throw new Error("invalido");
}

const PORT = process.env.PORT ?? 5566 
const dir = process.argv[2];

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8"});
    if(request.url === "/"){
        fs.readdir(dir, (err, files) => { //Callback é sincrono, já o readdir, não
            if (err) throw new Error(err);
            else {
                files.forEach(file => {
                response.write(createLink(dir,file));
            })
            response.end();
            }
        })
    } else if (request.url.startsWith("/favicon")){
        response.end("favicon");
    } else {
        fs.readFile(`.${request.url}`, "utf-8", (err, content) => {
            if(err) throw new Error(err);
            response.write(createReturn());
            response.end(content);
        });
        //response.end(request.url);
    }
})

server.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`);
});