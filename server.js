var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles1={
 'article_one' :{
    title: 'article-one',
    content:`<pre>
    This is the code for article 1</pre>`
},
'article_two' :{
    title: 'article-two',
    content:`<pre>
    This is the code for article 2</pre>`
},
'article_three' :{
    title: 'article-three',
    content:`<pre>
    This is the code for article 3</pre>`
}
};
function template(data){
var title = data.title;
var content = data.content;
var template_article = `
<!DOCTYPE HTML>
<head>
<title>${title}</title>
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div >
<a href="/">home</a>
</div>
${content}
</body>
</HTML>`;
return template_article;
}
app.get('/:articles1', function(req,res){
var articles=req.params.articles;
res.send(template(articles[articles1]));
});

app.get('/articletwo', function(req,res){
    res.send('this is article 2');
});

app.get('/articlethree', function(req,res){
    res.send('this is article 3');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
