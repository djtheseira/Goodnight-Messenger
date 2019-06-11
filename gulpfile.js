let gulp = require('gulp');
let css = require('gulp-clean-css');
let rename = require('gulp-rename');

gulp.task('css', function() {
  return gulp.src("./goodnight.css")
    .pipe(css())
    .pipe(rename({
      basename: "mingoodnight"
    }))
    .pipe(gulp.dest("./"));
});

gulp.task('css:watch', function() {
  gulp.watch('./*.css', ['css']);
});