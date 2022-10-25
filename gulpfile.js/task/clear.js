const del = require('del');
const path = require("../config/path");

function clear () {
    return del(path.root);
}

module.exports = clear;