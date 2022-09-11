import mongoose from 'mongoose';
import access from '../../private/access.js';

const uri = `mongodb+srv://${access.mongoUsername}:${access.mongoPassword}@${access.mongoHostname}/${access.mongoDatabase}`;

mongoose.connect(uri);
let db = mongoose.connection;

export default db;
