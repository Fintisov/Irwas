const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

function vendorScript() {
    return src(`${path.vendorScript.src}`)
        .pipe(plumber(notify.onError(app.vendorScript.plumber)))
        .pipe(dest(path.vendorScript.dist))
}

module.exports = vendorScript;