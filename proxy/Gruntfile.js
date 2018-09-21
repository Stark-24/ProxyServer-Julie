module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'Components/**/*.js']
    },
    watch: {
      files: ['Gruntfile.js'],
      tasks: ['jshint']
  }
  });
  
  grunt.registerTask('js', ['concat', 'uglify']);
  
  
};