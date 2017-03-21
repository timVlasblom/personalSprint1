'use strict';

var gulp = require('gulp');
var pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');

var rename = require('gulp-rename');
var ignore = require('gulp-ignore');
var clean = require('gulp-clean');

var localConfig = {

};

gulp.task('styles', function (cb) {
	pump([gulp.src('resources/assets/sass/style.scss'),
		sourcemaps.init(),
		sass(localConfig),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
		rename('style.css'),
		sourcemaps.write('.'),
		gulp.dest('./'),
		ignore.exclude('*.map'),
		cleancss({
			level: {
				2: {
					all: true
				}
			}
		}),
		rename('style.min.css'),
		gulp.dest('./')
	], cb);
});

gulp.task('styles:clean', function (cb) {
	pump([gulp.src([
			'resources/assets/css/main.css',
			'resources/assets/css/main.css.map',
			'resources/assets/css/main.min.css',
		]),
		clean()
	], cb);
});
