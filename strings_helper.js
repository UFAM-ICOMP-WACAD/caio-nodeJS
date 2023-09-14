function upper (str) {
    return str.toUpperCase();
}

//modules.export.lower = () => ....
function lower (str) {
    return str.toLowerCase();
}

module.exports = { upper, lower }