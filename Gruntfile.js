module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      build: {
        // expand: true,
        src: 'app/app.js',
        dest: 'build/app.js'
      }
    },
    less: {
      build: {
        // expand: true,
        src: 'app/main.less',
        dest: 'build/main.css'
      }
    },
    copy: {
      build: {
        // expand: true,
        src: 'app/index.html',
        dest: 'build/index.html'
      }      
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', [
    'copy',
    'less',
    'browserify'
  ]);

};