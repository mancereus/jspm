var gulp = require('gulp')
var markdown = require('gulp-markdown')
var vulcanize = require('gulp-vulcanize')
var del = require('del')

gulp.task('clean', function () {
  return del([
    'dest/**/*'
  ])
})

gulp.task('vulcan', function () {
  return gulp.src('app/zenmaster/*.html')
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
  return gulp.src('app/css/*.css')
    .pipe(gulp.dest('dest'))
})

gulp.task('js', function () {
  return gulp.src('app/zenmaster/*.js')
    .pipe(gulp.dest('dest'))
})

gulp.task('publish', function () {
  return gulp.src('dest/*')
    .pipe(gulp.dest('../mancereus.github.com/zenmaster'))
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

gulp.task('default', ['clean', 'vulcan', 'publish'])
