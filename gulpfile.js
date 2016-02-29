var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');


/////////////////////////////////////////
// Compiles and combines css and scss  //
//  Then minifies and sourcemaps it    //
// $ gulp styles                       //
/////////////////////////////////////////
gulp.task('styles', function() {

	gulp.src(['resources/scss/**/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('all-min.css'))
	.pipe(minify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('public/css'));
	});

//////////////////////////////
// Combines and minifies js //
// $ gulp scripts           //
//////////////////////////////
gulp.task('scripts', function() {
	// So gulp is retarded
	// and you can't actually minify then concat
	// So there's no reasonable way to minify just 1 file
	// then concatonate it.
	gulp.src(['./node_modules/phaser/dist/phaser.min.js',
		'./resources/js/Boot.js',
		'./resources/js/Preloader.js',
		'./resources/js/MainMenu.js',
		'./resources/js/Game.js'
		])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public/js'))
});


//////////////////////////////////
// Watches for changes and runs //
//  the above tasks             //
// $ gulp                       //
//////////////////////////////////

gulp.task('watch',function() {
	gulp.watch('./resources/scss/**/*.scss',['styles']);
	gulp.watch('./resources/js/**/*.js',['scripts']);
	});

gulp.task('default',['scripts', 'styles']);