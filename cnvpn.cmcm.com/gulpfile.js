'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var csscomb = require('gulp-csscomb');
var cssbeautify = require('gulp-cssbeautify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var header = require('gulp-header');
var livereload = require('gulp-livereload');
var stylish = require('jshint-stylish');
var watch = require('gulp-watch');
var imgcache = require('gulp-imgcache');

// 图像处理
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');

//错误捕获
var plumber = require('gulp-plumber');

var pkg = require('./package.json'),
    minijs=pkg.minijs,
    jstask=[],
    ismini=pkg.minify,
    isChange=pkg.changed,
    jshintConfig=pkg.jshintConfig;

// 设置相关路径
var paths = {
    css: 'css',
    js: 'js',
    img: 'images'
};

function handleError(err){
  gutil.beep();
  gutil.log(err.toString());
  this.emit('end');
}

function myDate(){
    var d=new Date;

    return (d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)+' '+('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+':'+('0'+d.getSeconds()).slice(-2))
}

function delFile(e){
    if(e.type=='deleted'){
        var cwd=process.cwd(),
            path=cwd+e.path.replace(cwd,'').replace('dev'+(process.platform!=='win32'?'/':'\\'),'').replace(/\.scss$/,'.css'),
            sPath=cwd+e.path.replace(cwd,'').replace('dev','source').replace(/\.less$/,'.css');

        del([path,sPath],function(err, deletedFiles){
            deletedFiles.forEach(function(path){
                gutil.log(gutil.colors.magenta(path)+' deleted');
            });
        });
    }
}

gulp.task('clean', function(cb) {
    del([paths.css+'/**/!(_)*','!'+paths.css+'/dev/**',
        paths.js+'/**/!(_)*','!'+paths.js+'/{dev,lib}/**',
        paths.img+'/**/!(_)*','!'+paths.img+'/{dev,sprite*}/**'
    ],cb); //清理目录下相关文件
});

// JS检查
gulp.task('jslint', function() {
    return gulp.src(paths.js+'/dev/**/!(_)*.js')
        .pipe(plumber({errorHandler:handleError}))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// css检查
gulp.task('csslint', function() {
    return gulp.src(paths.css+'/dev/**/!(_)*.{css,less}')
        .pipe(plumber({errorHandler:handleError}))
        .pipe(less())
        .pipe(csscomb())
        .pipe(autoprefixer({cascade:false,browsers:['> 1%', 'Firefox >= 10', 'Opera >= 10', 'ie >= 9', 'iOS >= 4', 'Chrome >= 10']}))
        .pipe(minifycss({aggressiveMerging:false,advanced:false,compatibility:'ie7',keepBreaks:true}))
        .pipe(cssbeautify({autosemicolon:true}))
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(gulp.dest(paths.css+'/source'));
});

gulp.task('html', function() {
    return gulp.src('**/!(_)*.{html,php}')
        .pipe(watch('**/!(_)*.{html,php}'))
        .pipe(plumber({errorHandler:handleError}))
        .pipe(livereload());
});

gulp.task('css', function() {
    var comment=[pkg.name,'','@author: '+pkg.author,'@date: '+myDate()];
    return gulp.src(paths.css+'/dev/**/!(_)*.{css,less}')
        .pipe(plumber({errorHandler:handleError}))
        .pipe(isChange?changed(paths.css):gutil.noop())
        .pipe(less())
        .pipe(csscomb())
        .pipe(autoprefixer({cascade:false,browsers:['> 1%', 'Firefox >= 10', 'Opera >= 10', 'ie >= 9', 'iOS >= 4', 'Chrome >= 10']}))
        .pipe(minifycss({aggressiveMerging:false,advanced:false,compatibility:'ie7',keepBreaks:true}))
        .pipe(cssbeautify({autosemicolon:true}))
        .pipe(header("/*!\n * "+comment.join("\n * ")+"\n */\n\n"))
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(gulp.dest(paths.css+'/source'))
        .pipe(ismini?minifycss({compatibility:'ie7',keepSpecialComments:0,keepBreaks:false}):gutil.noop())
        .pipe(ismini?header("/*!\n * "+comment.join("\n * ")+"\n */\n\n"):gutil.noop())
        .pipe(gulp.dest(paths.css))
        .pipe(livereload());
});

gulp.task('devjs', function() {//压缩dev目录下文件
    var comment=[pkg.name,'','@author: '+pkg.author,'@date: '+myDate()];
    return gulp.src(paths.js+'/dev/**/!(_)*.js')
        .pipe(plumber({errorHandler:handleError}))
        .pipe(isChange?changed(paths.js):gutil.noop())
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter(stylish))
        .pipe(ismini?uglify():gutil.noop())
        .pipe(ismini?header("/*!\n * "+comment.join("\n * ")+"\n */\n\n"):gutil.noop())
        .pipe(gulp.dest(paths.js))
        .pipe(livereload());
});

jstask.push('devjs');

Object.keys(minijs).forEach(function(name){//合并压缩package.json里指定的文件
    var files=minijs[name];
    gulp.task(name+'js', function() {
        var inc=[],
            comment=[pkg.name,'','@author: '+pkg.author,'@date: '+myDate()];
        files.forEach(function(fe){
            inc.push('include '+fe.replace(/^.*\//,''));
        });

        return gulp.src(files)
            .pipe(plumber({errorHandler:handleError}))
            .pipe(jshint(jshintConfig))
            .pipe(jshint.reporter(stylish))
            .pipe(concat(name+'.js'))
            .pipe(ismini?uglify():gutil.noop())
            .pipe(ismini?header("/*!\n * "+comment.concat('',inc).join("\n * ")+"\n */\n\n"):gutil.noop())
            .pipe(gulp.dest(paths.js))
            .pipe(livereload());
    });
    jstask.push(name+'js');
});

gulp.task('js', jstask);


// 处理图像
gulp.task('image', function () {
    return gulp.src(paths.img+'/dev/**/!(_)*')
        .pipe(plumber({errorHandler:handleError}))
        .pipe(changed(paths.img))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.img))
        .pipe(livereload());
});

gulp.task('cache', function () {
    return gulp.src([paths.img+'/**/*.{jpg,png,gif,svg}','!'+paths.img+'/{dev,sprite*}/**'])
        .pipe(plumber({errorHandler:handleError}))
        .pipe(imgcache())
        .pipe(gulp.dest(paths.img));
});

gulp.task('sprite', function () {
    return gulp.src(paths.img+'/sprite*/')
        .pipe(changed(paths.img))
        .pipe(gutil.buffer(function(err, files){
            files.forEach(function(file){
                var name=file.path.replace(/.*(?:\/|\\)/,'');
                gulp.src(file.path+'/*.{jpg,png}')
                    .pipe(plumber({errorHandler:handleError}))
                    .pipe(spritesmith({imgPath:'../images/'+name+'.png',padding:2,imgName:'dev/'+name+'.png',cssName:name+'.css'}))
                    .pipe(gulp.dest(paths.img));
            });
        }));
});



gulp.task('watch', function() {//监听文件改变触发相应任务
    livereload.listen();

    gulp.watch('**/!(_)*.{html,php}', ['html']);
    gulp.watch(paths.js+'/dev/**/!(_)*.js', ['devjs']).on('change', delFile);
    gulp.watch(paths.css+'/dev/**/!(_)*.{css,less}', ['css']).on('change', delFile);
    gulp.watch(paths.img+'/dev/**/!(_)*', ['image']).on('change', delFile);
    gulp.watch(paths.img+'/sprite*/*', ['sprite']);

    Object.keys(minijs).forEach(function(name){
        gulp.watch(minijs[name], [name+'js']);
    });
});

gulp.task('lint', ['jslint','csslint']);
gulp.task('all', jstask.concat('css','image'), function(){gulp.run('sprite');});
gulp.task('redo', ['clean'], function(){gulp.run('all');});
gulp.task('default', ['all']);
