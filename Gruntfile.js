module.exports = function (grunt) {

    var banner = '/*n<%= pkg.name %> <%= pkg.version %>';
    banner += '- <%= pkg.description %>n<%= pkg.repository.url %>n';
    banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>n*/n';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                maxlen: 100,
                ignores: ['test/coverage/**/*.js'],
                reporter: require('jshint-stylish'),
                expr: true
            },
            files: {
                src: ['public/js/**/*.js', 'lib/**/*.js',
                    'middlewares/**/*.js', 'routes/**/*.js', 'test/unit/**/*.js']
            },
            gruntfile: {
                src: 'Gruntfile.js'
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
            coverage: {
                src: ['test/**/*.js']
            },
            all: {
                src: ['test/unit/**/*.js']
            }
        },

        coveralls: {
            // Options relevant to all targets
            options: {
                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                force: false
            },

            all: {
                // LCOV coverage file (can be string, glob or array)
                src: 'test/coverage/reports/lcov.info',
                options: {
                    // Any options for just this target
                }
            }
        },

        env: {
            coverage: {
                APP_DIR_FOR_CODE_COVERAGE: './test/coverage/instrument/app/'
            }
        },

        clean: {
            coverage: {
                src: ['test/coverage/']
            }
        },

        copy: {
            views: {
                expand: true,
                flatten: true,
                src: ['views/*'],
                dest: 'test/coverage/instrument/app/views'
            }
        },


        instrument: {
            files: ['./app.js', './server.js', './routes/**/*.js',
                './middlewares/**/*.js', './lib/**/*.js', 'test/unit/**/*.js'],
            options: {
                lazy: false,
                basePath: 'test/coverage/instrument/'
            }
        },

        storeCoverage: {
            options: {
                dir: 'test/coverage/reports'
            }
        },


        makeReport: {
            src: 'test/coverage/reports/**/*.json',
            options: {
                type: 'lcov',
                dir: 'test/coverage/reports',
                print: 'detail'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-coveralls');

    grunt.registerTask('development', ['jshint', 'simplemocha:all']);

    grunt.registerTask('start', ['development', 'nodemon']);
    grunt.registerTask('test-coverall', ['coverage', 'coveralls']);
    grunt.registerTask('coverage', ['clean',
        'copy:views', 'env:coverage', 'instrument', 'simplemocha:coverage',
        'storeCoverage', 'makeReport']);
    grunt.registerTask('all', ['jshint', 'coverage']);

};
