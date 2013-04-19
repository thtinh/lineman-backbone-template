/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * You can find the parent object in: node_modules/lineman/config/files.coffee
 */

module.exports = require('lineman').config.extend('files', {
  js: {
    vendor: [
      "vendor/js/jquery.js",
      "vendor/js/underscore.js",
      "vendor/js/backbone.js",
      "vendor/js/**/*.js"
    ],
    app: [
      "app/js/app.js",
      "app/js/models/**/*.js",
      "app/js/services/**/*.js",
      "app/js/views/**/*.js",
      "app/js/router.js"
    ]
  },

  less: {
    compile: {
      options: {
        paths: ["vendor/css/normalize.css", "vendor/css/**/*.css", "app/css/**/*.less"]
      }
    }
  }
});
