module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watchify: {
      build: {
        options: {
          debug: true
        },
        src: './app/app.js',
        dest: 'build/app.js'
      }
    },
    less: {
      build: {
        src: 'app/main.less',
        dest: 'build/main.css'
      }
    },
    copy: {
      build: {
        src: 'app/index.html',
        dest: 'build/index.html'
      }
    },

    watch: {
      js: {
        files: ['build/app.js'],
        options: {
          livereload: true
        }
      },
      less: {
        files: ['app/main.less'],
        tasks: ['less'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      copy: {
        files: ['app/index.html'],
        tasks: ['copy'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-watchify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [
    'watchify',
    'watch'
  ]);
  grunt.registerTask('build', [
    'copy',
    'less',
    'watchify'
  ]);

};