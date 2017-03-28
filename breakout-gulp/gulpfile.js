var gulp = require('gulp');
var useref = require('gulp-useref');
var concat = require('gulp-concat');

gulp.task('watch', function(){
  gulp.watch('scripts/*.js', ['scripts']);
})

gulp.task('useref', function(){
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function() {
 return gulp.src(['scripts/*.js'])
	 .pipe(concat('main.js'))
	 .pipe(gulp.dest('dist/'));
});
