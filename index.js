

/*
* ############## DEPENDENCIES ##############
* */

const Koa = require('koa');

const restify = require('./middlewares/index');
const App  = require('./modules/app');
const { serverConfig } = require('./config');

// application instances
const app = new Koa();
/*
app.proxy = true;
*/

const server = new App(app);

/**
 * ############## MIDDLEWARES ##############
 */

app.use(require('@koa/cors')());

app.use(restify());

/**
 * ############## ROUTES ##############
 */

require('./routes')(app);

/**
 * ############## RUN SERVER ##############
 */

const { port } = serverConfig;

server.run({ port }).catch((err) => {
  console.error(err);
});
