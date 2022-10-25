const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

function script() {
    return src(path.script.src, {sourcemaps: app.isDev})
        .pipe(plumber(notify.onError(app.script.plumber)))
        .pipe(babel())
        .pipe(webpack(app.script.webpack))
        .pipe(dest(path.script.dist, {sourcemaps: app.isDev}))
}

module.exports = script;