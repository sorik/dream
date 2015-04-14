module.exports = function(grunt) {
  grunt.initConfig ({
    run: {
      app: {
        args: [
          'src/app.js'
        ]
      }
    },
    bower: {
      install: {
        options: {
          copy: false,
          verbose: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('serve', ['bower:install', 'run:app']);
};
