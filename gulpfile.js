const gulp = require( 'gulp' ),
  sass = require( 'gulp-sass' ),
  browserSync = require( 'browser-sync' ).create(),
  reload = browserSync.reload,
  autoPrefix = require( 'gulp-autoprefixer' );

// sass
gulp.task( 'sass', [ 'sass:compile' ] );
gulp.task( 'sass:compile', function () {
  return gulp.src( './assets/sass/*.scss' )
    .pipe( sass( {
      outputStyle: 'compressed'
    } ).on( 'error', sass.logError ) )
    .pipe( gulp.dest( './assets/css/' ) )
    .pipe( browserSync.stream() );
} );

// watch
gulp.task( 'watch', function () {
  gulp.watch( './assets/sass/**/*.scss', [ 'sass:compile' ] );
  gulp.watch( './assets/js/**/*.js' ).on( 'change', reload );
} );

// serve
gulp.task( 'serve', function () {
  browserSync.init( {
    server: './'
  } );
} );

// defualt
gulp.task( 'default', [ 'watch', 'serve' ] );