var gulp = require('gulp')
var markdown = require('gulp-markdown')
var vulcanize = require('gulp-vulcanize')
var del = require('del')
var browserSync = require('browser-sync').create();

// Static server
gulp.task('brun', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});
gulp.task('clean', function () {
  return del([
    'dest/**/*'
  ])
})

gulp.task('vulcan', function () {
  return gulp.src('app/*/*.html')
    .pipe(vulcanize({
      abspath: '',
      excludes: [],
      inlineScripts: false,
      inlineCss: false,
      stripExcludes: false
    }))
    .pipe(gulp.dest('dest'))
})

gulp.task('css', function () {
  return gulp.src('app/*/*.css')
    .pipe(gulp.dest('dest'))
})

gulp.task('img', function () {
  return gulp.src('app/**/*.png')
    .pipe(gulp.dest('dest'))
})

gulp.task('js', function () {
  return gulp.src('app/*/*.js')
    .pipe(gulp.dest('dest'))
})

gulp.task('publish', function () {
  return gulp.src('dest/*/*')
    .pipe(gulp.dest('../mancereus.github.com'))
})

gulp.task('markdown', function () {
  gulp.src('**/*.md')
    .pipe(markdown())
    .pipe(gulp.dest(function (f) {
      return f.base
    }))
})

gulp.task('mdwatch', function () {
  gulp.watch('**/*.md', ['markdown'])
})

gulp.task('default', ['clean','vulcan', 'img', 'js','css'], function() {
    gulp.start('publish');
});
