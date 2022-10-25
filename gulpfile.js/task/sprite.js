const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

function sprite() {
    return src(path.sprite.src)
        .pipe(plumber(notify.onError(app.image.plumber)))
        .pipe(dest(path.sprite.dist))
}

module.exports = sprite;