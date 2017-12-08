var express = require("express");

var swig = require("swig");

var app=express();

app.engine('html',swig.renderFile);

//取消对模板的缓存
swig.setDefaults({cache:false});

//设置静态文件托管
app.use('/public',express.static(__dirname+'/public'));

app.set('views','./views');

app.set('view engine','html');


app.listen(8083);

app.get('/',function(req,res,next){
    res.render('index.html');
})