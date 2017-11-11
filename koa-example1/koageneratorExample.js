const koa = require('koa');
const convert = require('koa-convert');
const app = new koa();


app.use(convert(function*(next) {
    //do something before yielding to next generator function 

    //in line which will be 1st event in downstream
    console.log("1");
    yield next;

    //do something when the execution returns upstream, 
    //this will be last event in upstream
    console.log("2");
}));

app.use(convert(function*(next) {
    // This shall be 2nd event downstream
    console.log("3");
    yield next;

    // This would be 2nd event upstream
    console.log("4");
}));

app.use(convert(function*() {
    // Here it would be last function downstream
    console.log("5");

    // Set response body
    this.body = "Hello Generators";

    // First event of upstream (from the last to first)
    console.log("6");

}));

app.listen(3000);