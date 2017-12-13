const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
    .all((req,res,next) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promotionsRouter.route('/:promoId').all((req, res, next) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
next();
})
.get((req,res,next) => {
    res.end('Will send all the promotion with id='+req.params.promoId+' to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
res.end('PUT operation not supported on /promotions with id='+req.params.promoId);
})
.delete((req, res, next) => {
    res.end('Deleting promotion with id='+req.params.promoId);
});

module.exports = promotionsRouter;