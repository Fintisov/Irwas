const isProd = process.argv.includes("--production");
const isDev = !isProd;

const path = require("./path");

const app = {
    isProd: isProd,
    isDev: isDev,

    html: {
        plumber: {
            "title": "HTML",
            "message": "Error: <%= error.message %>"
        }
    },

    style: {
        plumber: {
            "title": "SCSS",
            "message": "Error: <%= error.message %>"
        },

        sass: {outputStyle: 'expanded'},

        autoprefixer: {
            overrideBrowserslist: ['last 10 version'],
            grid: true,
            cascade: true,
        },
    },

    script: {
        plumber: {
            "title": "JS",
            "message": "Error: <%= error.message %>"
        },

        webpack: {
            mode: isProd ? "production" : "development",
            entry: "./_src/scripts/script.js",
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                            }
                        }
                    }
                ]
            }
        }
    },

    vendorScript: {
        plumber: {
            "title": "vendorScript",
            "message": "Error: <%= error.message %>"
        }
    },

    image: {
        plumber: {
            "title": "Image",
            "message": "Error: <%= error.message %>"
        },

        webp: {quality: 70},

        imageMin: {
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            verbose: true,
            optimizationLevel: 4 // 0 to 7
        }
    },

    font: {
        plumber: {
            "title": "Font",
            "message": "Error: <%= error.message %>"
        }
    },

    asset: {
        plumber: {
            "title": "Asset",
            "message": "Error: <%= error.message %>"
        }
    },

    server: {
        browserSync: {
            server: {
                baseDir: path.server.baseDir,
                directory: true,
            },
            port: 3000,
            notify: false
        }
    }
}

module.exports = app;