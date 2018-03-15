module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      dist: {
        src: ['./dist']
      }
    },
    browserify: {
      options: {
        transform: [
          ['vueify'],
          ['babelify', {presets: 'es2015'}]
        ]
      },
      dist: {
        src: './src/app.js',
        dest: './dist/build.js'
      }
    },
    replace: {
      options: {
        usePrefix: false,
        patterns: [
          {
            match: '/api/',
            replacement: grunt.option('api-root') + '/api/'
          }
        ]
      },
      dist: {
        src: 'dist/build.js',
        dest: 'dist/build.js'
      }
    }
  });

  grunt.registerTask('build', ['clean', 'browserify']);
  grunt.registerTask('static', ['build', 'replace']);
  grunt.registerTask('default', ['build']);
};
