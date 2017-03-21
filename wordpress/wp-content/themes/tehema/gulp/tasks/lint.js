'use strict';
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	runSequence = require('run-sequence'),
	sassLint = require('gulp-sass-lint'),
	jshint = require('gulp-jshint'),
    ignore = require('gulp-ignore'),

localConfig = {
	scss: {
		src: ['resources/assets/sass/**/*.scss'],
	}
};

gulp.task('lint', function (cb) {
	runSequence(['lint:scss','lint:javascript'] , cb);
});

gulp.task('lint:scss', function () {
	return gulp.src(localConfig.scss.src)
	.pipe(sassLint({
		'files': {
		'ignore': 'resources/assets/sass/vendors/*.s+(a|c)ss'
	},
	'rules': {
		'no-css-comments': 0,
		'property-sort-order': 0,
		'force-pseudo-nesting': 0,
		'hex-length': 0,
		'hex-notation': [2,
		{'style': 'uppercase'}],
	'indentation': [1,
		{'size': 'tab'}],
	'empty-line-between-blocks': 0,
	'leading-zero': 0,
	'no-ids': 0,
	}
}))

.pipe(sassLint.format())
.pipe(sassLint.failOnError())
});

gulp.task('lint:javascript', function(){
	gulp.src([
			'resources/assets/js/modules/**/*.js',
			'resources/assets/js/*.js',
		])
		.pipe(ignore.exclude('main.*'))
		.pipe(jshint({
			indent: 'tab',
			nonstandard: true,
			globalstrict: true,
			devel: true,
			globals: {
				console: true,
				alert: true,
				window: true,
				document: true,
				confirm: true,
				prompt: true,
				Math: true
			}
		}))
		.pipe(jshint.reporter('jshint-stylish'))
  	.pipe(jshint.reporter('fail'))
});
