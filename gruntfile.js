module.exports = function(grunt) {
  grunt.initConfig ({
    run: {
      app: {
        args: [
          'src/app.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('serve', ['run:app']);
};
