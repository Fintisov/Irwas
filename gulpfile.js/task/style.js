const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass')(require('sass'));
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupMedia = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const gulpIf = require("gulp-if");

function style() {
    return src(path.style.src, {sourcemaps: app.isDev})
        .pipe(plumber(notify.onError(app.style.plumber)))
        .pipe(sass(app.style.sass))
        .pipe(gulpIf(app.isProd, shorthand()))
        .pipe(gulpIf(app.isProd, groupMedia()))
        .pipe(autoprefixer(app.style.autoprefixer))
        .pipe(size({title: "style.css"}))
        .pipe(dest(path.style.destSrc))
        .pipe(dest(path.style.dist))
        .pipe(cleanCss())
        .pipe(rename({extname: '.min.css'}))
        .pipe(size({title: "style.min.css"}))
        .pipe(dest(path.style.destSrc))
        .pipe(dest(path.style.dist, {sourcemaps: app.isDev}))
}

module.exports = style;