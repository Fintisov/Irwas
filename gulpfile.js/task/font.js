const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

function font() {
    return src(path.font.src)
        .pipe(plumber(notify.onError(app.font.plumber)))
        .pipe(dest(path.font.dist))
}

module.exports = font;