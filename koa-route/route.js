const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();


const r = new Router();


function getMessage(ctx, next) {
    console.log(ctx, next);
    ctx.body = "request Get : hello message";
}


r.get('/hello', getMessage);

app.use(r.routes());
app.listen(3000);