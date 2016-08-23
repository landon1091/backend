let gulp = require('gulp');
htmlLint = require('gulp-html-lint');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src('index.html') 
    .pipe(htmlLint())
    .pipe(htmlLint.format())
    .pipe(htmlLint.failOnError())
    .pipe(gulp.dest('public/')); 
});

gulp.task('css', function () {
return gulp.src('style.css')
.pipe(gulp.dest('public/')); 
});

gulp.task('js', function () {
return gulp.src('app.js')
.pipe(gulp.dest('public/')); 
});