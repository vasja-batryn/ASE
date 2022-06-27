import dartSass from 'sass'; // preprocessor 
import gulpSass from 'gulp-sass'; // for compiling sass
import rename from 'gulp-rename'; // for renaming files min.css

import cleanCss from 'gulp-clean-css'; // for compression CSS 
import webpcss from 'gulp-webpcss'; // output WEBP pictures
import autoprefixer from 'gulp-autoprefixer'; // for adding autoprefixes
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // groups media quaries

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss({
        webpClass: ".webp",
		noWebpClass: ".no-webp"
    }))
    .pipe(autoprefixer({
        grid: true,
		overrideBrowserslist: ["last 3 versions"],
		cascade: true
    }))
    
	.pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}