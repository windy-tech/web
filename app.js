var express = require('express');
var path = require('path');

var app = express();


app.use('/assets',express.static(__dirname + '/assets'));

//for /index page
app.get('/', function(request,response){
	response.sendFile('index.html',{root:path.join(__dirname,'./views')});
});

//for /home page
app.get('/home', function(request,response){
	response.sendFile('home.html',{root:path.join(__dirname,'./views')});
});

//for /about page
app.get('/about', function(request,response){
	response.sendFile('about.html',{root:path.join(__dirname,'./views')});
});

//for /contact page
app.get('/contact', function(request,response){
	response.sendFile('contact.html',{root:path.join(__dirname,'./views')});
});

//for /live page
app.get('/live', function(request,response){
	response.sendFile('live.html',{root:path.join(__dirname,'./views')});
});

//for /upload page
app.get('/upload', function(request,response){
	response.sendFile('upload.html',{root:path.join(__dirname,'./views')});
});
//for /video page
app.get('/video', function(request,response){
	response.sendFile('video.html',{root:path.join(__dirname,'./views')});
});

//for /doc page
app.get('/doc', function(request,response){
	response.sendFile('doc.html',{root:path.join(__dirname,'./views')});
});

// for /community page
app.get('/community', function(request,response){
	response.sendFile('community.html',{root:path.join(__dirname,'./views')});
});

// for /personal page
app.get('/personal', function(request,response){
	response.sendFile('personal.html',{root:path.join(__dirname,'./views')});
});

app.get('/navbar', function(request,response){
	response.sendFile('navbar.html',{root:path.join(__dirname,'./views')});
});

app.get('/golang', function(request,response){
	response.sendFile('golang.html',{root:path.join(__dirname,'./views')});
});

app.listen(3000,function(){
	console.log('Listening at port 3000...');
});

module.exports = app;

