module.exports = function (grunt) {

    var banner = '/*n<%= pkg.name %> <%= pkg.version %>';
    banner += '- <%= pkg.description %>n<%= pkg.repository.url %>n';
    banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>n*/n';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'public/js/**/*.js', 'lib/**/*.js',
                'middlewares/**/*.js'],
            options: {
                maxlen: 100,
                reporter: require('jshint-stylish')


            }
        },

        nodemon: {
            dev: {
                script: './server.js',
                options: {
                    args: ['dev'],
                    nodeArgs: ['--debug'],
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    },
                    env: {
                        PORT: '8181'
                    },
                    cwd: __dirname,
                    ignore: ['node_modules/**', 'public/**', 'test/**'],
                    ext: 'js,coffee',
                    watch: ['server'],
                    delay: 1000,
                    legacyWatch: true
                }
            }
        },

        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'spec'
            },
            all: {src: ['test/**/*.js']}
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('development', ['jshint', 'simplemocha']);

    grunt.registerTask('start', ['development', 'nodemon']);

};