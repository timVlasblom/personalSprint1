'use strict';
var gutil = require('gulp-util');
var gulp = require('gulp');
var rename = require('gulp-rename');

module.exports = function () {
	var env = gutil.env.env || 'development';
	var conf;

	try {
		conf = require('../config/' + env);
	} catch (error) {
		conf = require('../config/' + env + '.sample');
	}
	return conf;
};
