'use strict';
var gulp = require('gulp');
var config = require('../config')();
var dbTask = require('gulp-db')({
	dialect: config.dialect,
	host: config.host,
	port: config.port,
	user: config.user,
	password: config.password
});
var mysqlDump = require('mysqldump');
var gmcfp = require('gulp-mysql-command-file-processor');
var runSequence = require('run-sequence').use(gulp);

gulp.task('database:create', dbTask.create(config.database));
gulp.task('database:drop', dbTask.drop(config.database));
gulp.task('database:export', function () {
	mysqlDump(config, function (err) {});
});
gulp.task('database:import', function (cb) {
	return gulp.src('data.sql')
			.pipe(gmcfp(config.user, config.password, config.host, config.port, 'M', config.database))
			.pipe(gulp.dest('dist/db'));
});
gulp.task('database:reset', function (cb) {
	runSequence(['database:drop', 'database:create', 'database:import'], cb);
});
