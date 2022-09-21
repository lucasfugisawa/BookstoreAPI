import mongoose from 'mongoose';
import config from '../../config.js';

const encodedUsername = encodeURIComponent(config.mongo.username);
const encodedPassword = encodeURIComponent(config.mongo.password);
const encodedHostname = encodeURIComponent(config.mongo.hostname);
const encodedDatabase = encodeURIComponent(config.mongo.database);

const uri = `mongodb+srv://${encodedUsername}:${encodedPassword}@${encodedHostname}/${encodedDatabase}`;

mongoose.connect(uri);
let db = mongoose.connection;

export default db;
