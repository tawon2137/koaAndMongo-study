const jwt = require('koa-jwt');


module.exports = function(ctx) {
    console.log(jwt);
    console.log(ctx);
    if (ctx.request.body.password === 'password') {
        ctx.status = 200;
        ctx.body = {
            token: jwt('A very secret key'),
            message: 'Successfully logged in',
        }
    } else {
        ctx.status = ctx.status = 401;
        ctx.body = {
            message: 'Authentication failed'
        }
    }

    return ctx;
}