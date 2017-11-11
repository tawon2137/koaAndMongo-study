var koa = require('koa');
var app = new koa();
var convert = require('koa-convert');

app.use(convert(function*() {
    this.body = '<h1>헬로 월드!~</h1>';
}));

app.listen(3000, function() {
    console.log('서버 로드 ! port : 3000');
});