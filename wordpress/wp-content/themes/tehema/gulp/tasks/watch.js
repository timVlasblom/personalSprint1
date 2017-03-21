'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
gulp.task('watch', function() {
		gulp.watch('resources/assets/sass/**/*.scss', ['lint:scss', 'styles']);
		gulp.watch('resources/assets/js/**/*.js', ['lint:javascript', 'javascript']);
});
