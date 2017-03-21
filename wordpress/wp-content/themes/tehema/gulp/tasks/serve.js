'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {
	connect.server({
		port: 8080,
		base: '../../..'
	}, function () {
		browserSync.init({
			proxy: '127.0.0.1:8080'
		});
		gulp.watch([
			'style.min.css',
			'resources/assets/js/main.min.js',
			'resources/assets/images/**/*',
			'*.php',
			'views/*.php'
		]).on('change', browserSync.reload);
	});
});
