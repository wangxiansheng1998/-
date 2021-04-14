const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");
// const bable = require("gulp-bable");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");


//拷贝html文件
// 
gulp.task("indexhtml", done => {
    gulp.src("src/index.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
});

gulp.task("html", done => {
    gulp.src(["src/*.html", "!./src/index.html"])
        .pipe(gulp.dest("dist/html"))
    done();
});

//将sass转换成css
gulp.task("sass", done => {
    gulp.src("./src/sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());;
    done();
});
gulp.task("cbt", done => {
    gulp.src("./src/bootstrap/css/*")
        .pipe(gulp.dest("dist/bootstrap/css"))
    done();
});
//拷贝js并且压缩js
 
gulp.task("tb", done => {
    gulp.src("./src/font*")
        .pipe(gulp.dest("dist/font"))
    done();
});

gulp.task("js", done => {
    gulp.src("./src/js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
});
gulp.task("cimg", done => {
    gulp.src("./src/img/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());
    done();
});
//将高版本的js转换成ES5

// gulp.task("babel", done => {
//     gulp.src("./src/js/b.js")
//         .pipe(babel({
//             presets: ['@babel/preset-env']
//         }))
//         .pipe(gulp.dest("dist/js"));
//     done();
// })


// //监听文件变化，一旦监听的文件发生变化，就执行指定的任务
gulp.task("watch", done => {

    gulp.watch("./src/index.html", gulp.series("indexhtml"));
    gulp.watch("src/*.html", gulp.series("html"));
    gulp.watch("./src/sass/*.scss", gulp.series("sass"));
    gulp.watch("./src/js/*.js", gulp.series("js"));
    done();
})

//创建服务器
gulp.task("server", done => {

    connect.server({
        root: "dist",
        port: 0000
    })

    done();
});
gulp.task("build", gulp.parallel("cimg", "indexhtml", "sass", "js", "html"));
gulp.task("default", gulp.parallel("build", "server", "watch"));