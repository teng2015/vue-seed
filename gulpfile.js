
var kit        = require('nokit'),
    path       = require('path'),
    url        = require('url'),
    gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    less       = require('gulp-less'),
    docco      = require('gulp-docco'),
    mincss     = require('gulp-minify-css'),
    rename     = require('gulp-rename'),
    //cache    = require('gulp-cached'),
    //remember = require('gulp-remember'),
    hash       = require('gulp-hash-filename'),
    gutil      = require('gulp-util'),
    through2   = require('through2'),
    r          = require('requirejs'),
    _          = kit._,
    Promise    = kit.Promise;

Promise.enableLongStackTrace();


gulp.task('default', ['build']);
