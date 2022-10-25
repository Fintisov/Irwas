const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

function asset() {
    return src(`${path.asset.src}`)
        .pipe(plumber(notify.onError(app.asset.plumber)))
        .pipe(dest(path.asset.dist))
}

module.exports = asset;