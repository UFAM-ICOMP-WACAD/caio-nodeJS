import * as fs from 'fs'

//Treinando promise e async await
function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) =>{
            if(err) reject(err)
            else resolve(data);
        })
    });
}

const p1 = readFile('./public/libuv.txt');
const p2 = readFile('./public/node.txt');

Promise.all([p1,p2]).then(([d1,d2]) => {
    console.log(d1 + d2);
})

// readF1
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

async function calcula(){ //dentro de uma funcao é tudo sincrono
    const d1 = await readFile('./public/libuv.txt');
    const d2 = await readFile('./public/node.txt');
}