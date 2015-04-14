module.exports = function(grunt) {
  grunt.initConfig ({
    run: {
      app: {
        args: [
          'src/app.js'
        ],
        options: {
          wait: false
        }
      }
    },
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bower:install']
      }
    },
    bower: {
      install: {
        options: {
          copy: false,
          verbose: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      source: {
        src: ['gruntfile.js', './src/public/js/{,*/}*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('serve', ['bower:install', 'jshint:source', 'run:app', 'watch']);
};
