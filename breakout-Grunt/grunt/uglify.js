module.exports = {
	dist: {
		files: {
			'build/script.min.js': ['<%= concat.dist.dest %>'],
		},
	},
};
