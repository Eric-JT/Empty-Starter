const GULP         = require("gulp");
const PREFIX       = require("gulp-autoprefixer");


/**
 * Compile scss files
 * save css build in theme folder
 */
GULP.task("prefix", function () {
  return GULP.src("style.css")
  .pipe(PREFIX(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
  .pipe(GULP.dest('./'));
});

/**
 * copy normalize from node_modules to project root
 * $ gulp get-normalize
 */
GULP.task("get-normalize", function() {
  return GULP.src('node_modules/normalize.css/normalize.css')
  .pipe(GULP.dest('./'));
});

/*
* Watch folders for changes
*/
GULP.task("watch", function() {
  GULP.watch("style.css", ["prefix"]);
});


GULP.task("default", ["watch"]);
