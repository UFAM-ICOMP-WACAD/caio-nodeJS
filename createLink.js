export function createLink(dir, filename) {
    return `<a href="/${dir}/${filename}">${filename}</a><br>\n`;
}
export function createReturn(){
    return `<a href="/">Voltar</a><br>\n`
}
//module.exports = { createLink, createReturn }