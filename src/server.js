'use strict'

const express = require('express');
const debug = require('debug');
const http = require('http');

const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({teste:'teste'});
});
app.use('/', route);

server.listen(port);
