'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('build', function (cb) {
	runSequence('lint', 'clean', ['javascript', 'styles'], cb);
});
