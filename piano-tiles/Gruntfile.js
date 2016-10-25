/*
	Gruntfile.js
  Latest modified 2016-10-25 12:06
*/

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    clean: {
      js: ['build/*.js'],
      css: ['build/*.css']
    },
		uglify: {
			options: {
				banner: ' /*! Javascript <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */',
        footer: ' /*! 2010-2016 Cheetah Mobile all rights reserved. */',
        beautify: false,
        mangle: false 
			},
			runUglify: {
				src: ['js/*.js', '!js/*.min.js'],
				dest: 'build/piano-tiles2.min.js'
			}
		},
		cssmin: {
			runCssmin: {
				src: ['css/pt.css'],
				dest: 'build/piano-tiles2.min.css'
			}
		},
    concat: {
      /*
      dist: {
        src: ['build/js/*.js'],
        dest: 'build/js/con/concat.js'
      }
      */
    },
		my_property: 'whatever'
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', [ 'clean', 'uglify', 'cssmin']);

};

