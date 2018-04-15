var gulp         = require('gulp');
var sass         = require('gulp-sass');
var cssmin       = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var babel        = require("gulp-babel");
var uglify       = require('gulp-uglify');
var sourcemaps   = require('gulp-sourcemaps');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var clean        = require('gulp-clean');
var gutil        = require('gulp-util');
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;
// var rename       = require('gulp-rename');
// var minify       = require('gulp-minify');
// var changed      = require("gulp-changed");

var tasks = [
    'html',
    // 'img', // 耗时任务
    'css',
    'js'
]

gulp.task('serve', tasks, function() {

    browserSync.init({
        server: 'src/dist'
    });

    gulp.watch("src/*.html", ['html']);
    gulp.watch("src/img/**/*.{png,jpg,jpeg,gif,svg}", ['img']);
    gulp.watch("src/style/*.{scss,css}", ['css']);
    gulp.watch("src/scss/*.scss", ['scss']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/*.html").on('change', reload);
});

gulp.task('html', function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("src/dist"))
});

gulp.task('img', function() {
    return gulp.src("src/img/**/*.{png,jpg,jpeg,gif,svg}")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest("src/dist/img"));
});

gulp.task('css', ['sass'], function() {
    return gulp.src("src/style/*.css")
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .on('error', function(err) {
            gutil.log('css Error!', err.message);
            this.end();
        })
        .pipe(cssmin())
        .pipe(gulp.dest("src/dist/css"))
        .pipe(reload({stream: true}));
});

gulp.task('sass', function() {
    return gulp.src("src/style/*.scss")
        .pipe(sass())
        .on('error', function(err) {
            gutil.log('scss Error!', err.message);
            this.end();
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(cssmin())
        .pipe(gulp.dest("src/dist/css"))
        .pipe(reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src( "src/js/*.js" )
        .pipe(sourcemaps.init())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(babel())
        .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest("src/dist/js"))
        .pipe(reload({stream: true}));
});

gulp.task('clean', function() {
    return gulp.src( "src/dist/**" )
        .pipe(clean());
});

gulp.task('default', ['serve']);
