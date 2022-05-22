const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');

function styles() {
    return src('dist/scss/*.scss')
        .pipe(scss({ outputStyle: "compressed" }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest("dist/css"))
        .pipe(browserSync.stream())
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        }
    })
}

function scripts() {
    return src(['dist/js/main.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
}

function images() {
    return src('dist/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('docs/images'))
}

function build() {
    return src([
        'dist/css/style.min.css',
        'dist/fonts/**/*',
        'dist/js/main.min.js',
        'dist/*.html'
    ], { base: 'dist' })
        .pipe(dest('docs'))
}

function cleanDist() {
    return del('docs')
}

function watching() {
    watch(['dist/scss/**/*.scss'], styles);
    watch(["dist/js/**/*.js", '!dist/js/main.min.js'], scripts);
    watch(["dist/*.html"]).on('change', browserSync.reload);
}




exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);


