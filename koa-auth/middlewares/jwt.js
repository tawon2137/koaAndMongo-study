const jwt = require('koa-jwt');


module.exports = jwt({
    secret: 'A very secret key',
});