const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");
// const bable = require("gulp-bable");
const rename = require("gulp-rename");


//拷贝html文件
// 
gulp.task("index.html", done => {
    gulp.src("index.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
});

gulp.task("html", done => {
    gulp.src(["*.html", "!index.html"])
        .pipe(gulp.dest("dist/html"))
    done();
});

//将sass转换成css
gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"));
    done();
});

//拷贝js并且压缩js

gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
});

//将高版本的js转换成ES5

gulp.task("babel", done => {
    gulp.src("js/b.js")
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest("dist/js"));
    done();
})


// //监听文件变化，一旦监听的文件发生变化，就执行指定的任务
gulp.task("watch", done => {

    gulp.watch("index.html", gulp.series("index.html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("js"));
    done();
})

//创建服务器
gulp.task("server", done => {

    connect.server({
        root: "dist",
        livereload: true
    })

    done();
});
gulp.task("build", gulp.parallel("index.html", "sass", "js","html"));
gulp.task("default", gulp.parallel("build","server", "watch"));