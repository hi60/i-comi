var gulp = require('gulp');
var sass = require('gulp-sass');
var ejs  = require('gulp-ejs');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src(['./src/sass/**/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('ejs', function() {
    return gulp.src(['./src/ejs/**/*.ejs', '!./src/ejs/**/_*.ejs'])
        .pipe(ejs())
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest('./htdocs'));
});

gulp.task('default', ['sass', 'ejs'], function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/ejs/**/*.ejs', ['ejs']);
});
