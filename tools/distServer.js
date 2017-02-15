import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import open from 'open';
import sendMail from './mailHelper';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/mail', function(req, res) {
    sendMail(req.body.email, function(err, body) {
        if (err) res.send(false);
        else if (body) res.send(true);
    });
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});