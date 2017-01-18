/**
 * 몽고디비 연결 파일
 * Location : config/mongo.js
 * @date 2017-01-18
 * 
 */
import mongoose from 'mongoose';
import { databaseConfig } from './env';

const db = mongoose.connection;

db.on('error', () => { console.log('connection Error') });
db.once('open', () => { console.log('Connected Mongo') });

const makeConnection = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(databaseConfig.host);
}

module.exports = { makeConnection };

