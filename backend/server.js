import express from 'express';
import bodyParser from 'body-parser';
import bunyan from 'bunyan';
import expressLog from 'express-bunyan-logger';
import postsRoute from './routes/posts';


const app = express(),
    log = bunyan.createLogger({name: 'server'}),
    port = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(expressLog());
app.use(expressLog.errorLogger());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', postsRoute);

app.listen(port);
log.info(`Express server listening at port ${port}`);
