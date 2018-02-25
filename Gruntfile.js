module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        riot: {
            options: {
                concat: true
            },
            dist: {
                src: 'tags/*.tag',
                dest: 'dist/js/app.js'
            }
        }
    });

    grunt.registerTask('default', ['riot']);
};
