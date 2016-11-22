var gulp = require('gulp');
var sass =require('gulp-sass');

gulp.task('sass',function() {
	return gulp.src('./static/scss/app.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./static/css'));
});

gulp.task('watch', ['sass'], function(){
	gulp.watch('./static/scss/**/*.scss',['sass']);
});
