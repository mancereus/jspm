var gulp = require('gulp')
var markdown = require('gulp-markdown')
var vulcanize = require('gulp-vulcanize')
var crisper = require('gulp-crisper')
var polybuild = require('polybuild')
var del = require('del')
var browserSync = require('browser-sync').create();

// Static server
gulp.task('brun', function () {
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
    return gulp.src(['app/**/index.html', 'app/**/print.html', 'app/**/tipps.html', 'app/**/help.html'])
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            inlineScripts: true,
            inlineCss: true,
            stripComments: true,
            stripExcludes: true
        }))
        .pipe(crisper())
        .pipe(gulp.dest('dest'))
})
gulp.task('generate-service-worker', function (callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'dest';

    swPrecache.write(path.join(rootDir, 'service-worker.js'), {
        staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif}'],
        stripPrefix: rootDir
    }, callback);
});
gulp.task('polybuild', function () {
    return gulp.src('app/**/*.html')
        .pipe(polybuild({maximumCrush: true}))
        .pipe(gulp.dest('dest'))
})

gulp.task('css', function () {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('dest'))
})

gulp.task('copy', function () {
    return gulp.src(['app/**/*.png', 'app/*.ico', 'app/**/*.jpg', 'app/**/*.json', 'app/**/index.js', 'app/**/print.js', 'app/**/tipps.js', 'app/**/help.js'])
        .pipe(gulp.dest('dest'))
})

gulp.task('publish', function () {
    return gulp.src('dest/**/*')
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

gulp.task('default', ['vulcan', 'copy'], function () {
    gulp.start('publish');
});
