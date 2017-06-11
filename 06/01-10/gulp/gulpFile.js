var gulp = require('gulp') // 可以暂时理解为引入一个js
var less = require('gulp-less') // 是gulp的插件之前
var uglify = require('gulp-uglify') // 压缩js的插件
var csso = require('gulp-csso') // 压缩css
var concat = require('gulp-concat') // 合并代码

// var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')

gulp.task("myless", function() {
    gulp.src("./*.less")
        .pipe(less())
        .pipe(gulp.dest("./css"))
    console.log("css 编译完成")
})

gulp.task("myjs", function() {
    gulp.src('./*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./css'))
})
gulp.task("mywatch", function() {
    gulp.watch(['./*.js'], ['myjs'])
    gulp.watch(['./*.less'], ['myless'])
})