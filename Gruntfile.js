module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dist: {
                src: ['./dist']
            }
        },
        riot: {
            options: {
                concat: true
            },
            dist: {
                src: 'tags/*.tag',
                dest: 'dist/app.js'
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
                src: 'dist/app.js',
                dest: 'dist/app.js'
            }
        }
    });

    grunt.registerTask('build', ['clean', 'riot']);
    grunt.registerTask('static', ['build',  'replace']);
    grunt.registerTask('default', ['build']);
};
