'use strict';

module.exports = function(grunt) {

grunt.initConfig({
	concat: {
		dist:{
			src:['scripts/**.js'],
			dest: 'build/script.js',
		},
	},
	watch:{
		js: {
			files: ['scripts/**/*.js'],
			tasks: ['concat','uglify'],
		},
	},
	uglify: {
  	dist: {
	    files: {
	      'build/script.min.js': ['<%= concat.dist.dest %>'],
	    },
	  },
	},
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['concat', 'watch', 'uglify']);

};
