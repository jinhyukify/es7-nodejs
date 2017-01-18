/**
 * Server End point
 * Location: app.js
 * @date 2017-01-17
 * @author: 김진혁
 */

import express        from 'express';
import http           from 'http';
import bodyParser     from 'body-parser';
import cookieParser   from 'cookie-parser';

import Router         from './router/router';
import mongoose       from './config/mongo';

const app = express();
const server = http.Server(app);
const PORT = process.env.PORT? process.env.PORT: 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

const router = Router(app);

// MONGO CONNECTION
mongoose.makeConnection();

// START SERVER
server.listen(PORT, () => {
  console.log('******* Server Start *******');
})



