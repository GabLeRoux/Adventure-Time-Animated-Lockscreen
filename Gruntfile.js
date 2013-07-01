/**
* This file is used to automate the development
* See http://gruntjs.com/getting-started
*
* Note: when using grunt watch, scripts are not minified
* Concat will be used instead of uglify so it's easier to
* debug.
*/

module.exports = function(grunt) {

  grunt.file.defaultEncoding = 'utf8';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Dangerous: delete files!
    clean: {
      distribution:
        [
          "<%= pkg.name %>.theme/js/*.js",
          "<%= pkg.name %>.theme/css/*.css"
        ]
    },

    // Combine and compress javascripts
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      distribution: {
        files: {
          '<%= pkg.name %>.theme/js/scripts.min.js': [
            'js/*.js'
          ]
        }
      }
    },

    // Only combine javascripts
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      distribution: {
        src: [ 'js/*.js'],
        dest: '<%= pkg.name %>.theme/js/scripts.min.js'
      }
    },
    
    // build sass files indicated by config.rb
    compass: {
      distribution: {
        options: {
          config: 'config.rb'
        }
      }
    },

    // Compress the theme for a release
    // @todo: make the theme winterboard compliant
    compress: {
      distribution: {
        options: {
          mode: 'zip',
          archive: 'release/<%= pkg.name %>-<%= pkg.version %>.zip'
        },
        files: [
          {src: ['<%= pkg.name %>.theme/**']}
         ]
      },
      release: {
        options: {
          mode: 'zip',
          archive: 'release/<%= pkg.name %>-latest.zip'
        },
        files: [
          {src: ['<%= pkg.name %>.theme/**']}
         ]
      }
    },

    // auto execute tasks on file modifications
    watch: {
      distribution: {
        files: [
        'js/*.js',
        'sass/*.scss',
        'sass/*.sass',
        ],
        tasks: ['clean', 'concat', 'compass'],
        options: {
          nospawn: true,
        },
      },
    },

  });


  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // tasks definitions
  grunt.registerTask('default', ['clean', 'uglify', 'compass']);
  grunt.registerTask('release', ['default', 'compress']);

};