import dartSass from 'sass'; // preprocessor 
import gulpSass from 'gulp-sass'; // for compiling sass
import rename from 'gulp-rename'; // for renaming files min.css

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
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}