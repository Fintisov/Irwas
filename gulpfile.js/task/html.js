const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const webpHtml = require('gulp-webp-in-html');

function html() {
    return src(path.html.src)
        .pipe(plumber(notify.onError(app.html.plumber)))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(dest(path.html.dist))
}

module.exports = html;