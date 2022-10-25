const {watch, series, parallel} = require("gulp");

//конфигурация
const path = require("./config/path");
const app = require("./config/app");

//плагины
const browserSync = require('browser-sync').create();

// tasks
const html = require("./task/html");
const clear = require("./task/clear");
const style = require("./task/style");
const script = require("./task/script");
const vendorScript = require("./task/vendorScript");
const image = require("./task/image");
const sprite = require("./task/sprite");
const font = require("./task/font");
const asset = require("./task/asset");

function server() {
    browserSync.init(app.server.browserSync);
}

function watcher() {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.style.watch, style).on("all", browserSync.reload);
    watch(path.script.watch, script).on("all", browserSync.reload);
    watch(path.vendorScript.watch, vendorScript).on("all", browserSync.reload);
    watch(path.image.watch, image).on("all", browserSync.reload);
    watch(path.sprite.watch, sprite).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
    watch(path.asset.watch, asset).on("all", browserSync.reload);
}

// задачи
exports.html = html;
exports.style = style;
exports.script = script;
exports.vendorScript = vendorScript;
exports.image = image;
exports.sprite = sprite;
exports.font = font;
exports.asset = asset;
exports.clear = clear;
exports.watcher = watcher;
exports.server = server;

const production = series(
    clear,
    parallel(html, style, script, vendorScript, image, sprite, font, asset),
    parallel(watcher, server),
);

const developer = series(
    parallel(html, style, script, vendorScript, image, sprite, font, asset),
    parallel(watcher, server),
)


exports.default = app.isProd ? production : developer;