const { watch, src, dest, parallel, series } = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const jsonToSass = require("gulp-json-data-to-sass");

function cssTask() {
	return src("./scss/*.scss", { allowEmpty: true })
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compressed" }))
		.on("error", sass.logError)
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write("."))
		.pipe(dest("./styles"));
}

function watchFiles() {
	watch("./scss/**", parallel(cssTask));
}

exports.build = series(cssTask);

exports.default = series(parallel(cssTask, watchFiles));
