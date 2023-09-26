const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8"});
    if(request.url === "/"){
        fs.readdir(dir, (err, files) => { //Callback é sincrono, já o readdir, não
            if (err) throw new Error(err);
            else {
                files.forEach(file => {
                response.write(createLink.createLink(dir,file));
            })
            response.end();
            }
        })
    } else if (request.url.startsWith("/favicon")){
        response.end("favicon");
    } else {
        fs.readFile(`.${request.url}`, "utf-8", (err, content) => {
            if(err) throw new Error(err);
            response.write(createLink.createReturn());
            response.end(content);
        });
        //response.end(request.url);
    }
})

server.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`);
});