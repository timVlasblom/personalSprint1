module.exports = function(grunt) {

grunt.initConfig({
	concat: {
		dist:{
			src:['scripts/script.js', 'scripts/peddle.js', 'scripts/bricks.js', 'scripts/ball.js'],
			dest: 'build/script.js',
		},
	},
	watch:{
		js: {
			files: ['scripts/**/*.js'],
			tasks: ['concat'],
		},
	},
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat', 'watch']);

};
