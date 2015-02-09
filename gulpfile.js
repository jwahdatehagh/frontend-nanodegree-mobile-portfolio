var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var targetDir = 'dist';

gulp.task('css', function() {
  return gulp.src([
      'css/style.css',
    ])
    .pipe(autoprefix('last 10 version', "> 5%"))
    .pipe(minifycss())
    .pipe(gulp.dest(targetDir))
    .pipe(notify('Main CSS compiled, prefixed, and minified.'));
});

gulp.task('pizzaCss', function() {
  return gulp.src([
      'views/css/style.css',
      'views/css/bootstrap-grid.css',
    ])
    .pipe(concat('pizzas.css'))
    .pipe(autoprefix('last 10 version', "> 5%"))
    .pipe(minifycss())
    .pipe(gulp.dest('views/' + targetDir))
    .pipe(notify('Pizza CSS compiled, prefixed, and minified.'));
});


gulp.task('js', function() {
  gulp.src([
      'js/analytics.js',
      'js/perfmatters.js'
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(targetDir))
    .pipe(notify('Main JS concatenated and minified.'));
});

gulp.task('pizzaJs', function() {
  gulp.src([
      'views/js/main.js',
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('views/' + targetDir))
    .pipe(notify('Pizza JS concatenated and minified.'));
});


gulp.task('watch', function() {
  gulp.watch('css/style.css', ['css']);
  gulp.watch('views/css/**/*.css', ['pizzaCss']);
  gulp.watch('js/**/*.js', ['js']);
  gulp.watch('views/js/**/*.js', ['pizzaJs']);
});

gulp.task('default', ['css', 'pizzaCss', 'js', 'pizzaJs', 'watch']);