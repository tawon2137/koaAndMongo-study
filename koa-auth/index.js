const koa = require('koa');
const router = require('koa-router');

const app = new koa();
const route = new router();
const koaBetterBody = require('koa-better-body');
const bodyParser = require('koa-bodyparser');

const jwt = require('./middlewares/jwt');
const authenticate = require('./middlewares/authenticate');

const customerService = require('./services/customer.service');


app.use(bodyParser());


route.get('/customers', async(ctx, next) => {
    ctx.body = await customerService.getCustomers();
});

route.get('/customers/:id', async(ctx, next) => {
    const id = ctx.params.id;
    const customerData = await customerService.getCustomer(id);

    if (customerData) {
        ctx.body = customerData;
    } else {
        ctx.status = 404;
        ctx.body = { message: '유효하지 않은 ID입니다.' };
    }
});


route.post('/customers', jwt, async(ctx, next) => {
    ctx.body = await customerService.postCustomer(ctx.request.body);
});

route.post('/login', async(ctx, next) => {
    authenticate(ctx);
});


app
    .use(route.routes())
    .use(route.allowedMethods());


app.listen(3000);