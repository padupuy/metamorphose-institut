var gulpif       = require('gulp-if');
var browserSync  = require('browser-sync');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('blendid/gulpfile.js/lib/handleErrors');
var path         = require('path');
var postcss      = require('gulp-postcss');
var cssnano      = require('gulp-cssnano');

module.exports = {
  html     : true,
  images   : true,
  fonts    : true,
  static   : true,
  svgSprite: true,
  ghPages  : false,

  stylesheets: {
    alternateTask: function (gulp, PATH_CONFIG, TASK_CONFIG) {
      return function () {
        var plugins = [
          require('postcss-import'),
          require('postcss-cssnext')({ next: { browsers: 'last 5 versions, ie >= 9' } }),
          require('postcss-nested')
        ];

        return gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.stylesheets.src, '*.{' + TASK_CONFIG.stylesheets.extensions + '}'))
          .pipe(gulpif(!global.production, sourcemaps.init()))
          .on('error', handleErrors)
          .pipe(postcss(plugins))
          .pipe(gulpif(global.production, cssnano(TASK_CONFIG.stylesheets.cssnano || {})))
          .pipe(gulpif(!global.production, sourcemaps.write()))
          .pipe(gulp.dest(path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.stylesheets.dest)))
          .pipe(browserSync.stream());
      };
    }
  },

  javascripts: {
    entry: {
      app: ['./app.js']
    },
    provide: {
      $: 'jquery',
      jQuery: 'jquery'
    }
  },

  browserSync: {
    server: {
      baseDir: 'public'
    }
  },

  production: {
    rev: true
  },
};
