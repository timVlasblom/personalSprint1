'use strict';

var gulp = require('gulp');
var pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ignore = require('gulp-ignore');
var clean = require('gulp-clean');

gulp.task('javascript', function (cb) {
	pump([gulp.src([
			'resources/assets/js/vendor/**/*.js',
			'resources/assets/js/modules/**/*.js',
			'resources/assets/js/*.js',
		]),
		ignore.exclude('main.*'),
		sourcemaps.init(),
		concat('main.js'),
		sourcemaps.write('.'),
		gulp.dest('resources/assets/js/'),
		ignore.exclude('*.map'),
		uglify(),
		rename('main.min.js'),
		gulp.dest('resources/assets/js/')
	], cb);
});

gulp.task('javascript:clean', function (cb) {
	pump([gulp.src([
			'resources/assets/js/main.js',
			'resources/assets/js/main.js.map',
			'resources/assets/js/main.min.js',
		]),
		clean()
	], cb);
});
