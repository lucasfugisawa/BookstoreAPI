import mongoose from 'mongoose';
import config from '../../config.js';

const uri = `mongodb+srv://${config.mongo.username}:${config.mongo.password}@${config.mongo.hostname}/${config.mongo.database}`;

mongoose.connect(uri);
let db = mongoose.connection;

export default db;
