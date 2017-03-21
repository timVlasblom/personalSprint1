'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('clean', function (cb) {
	runSequence(['javascript:clean', 'styles:clean'], cb);
});
