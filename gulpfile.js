var gulp = require('gulp');
var markdown = require('gulp-markdown');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcan', function () {
    return gulp.src('zenmaster/tipps.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false
        }))
        .pipe(gulp.dest('dest'));
});

gulp.task('markdown', function() {
    gulp.src('**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', function() {
    gulp.watch('**/*.md', ['markdown']);
})