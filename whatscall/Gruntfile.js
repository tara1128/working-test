/*
	Gruntfile.js
  Latest modified 2016-10-11 16:42
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
				src: ['js/whatscall.js'],
				dest: 'build/whatscall.min.js'
			}
		},
		cssmin: {
			runCssmin: {
				src: ['css/whatscall.css'],
				dest: 'build/whatscall.min.css'
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

