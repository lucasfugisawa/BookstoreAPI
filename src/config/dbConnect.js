import mongoose from 'mongoose';
import integrations from '../../integrations.json' assert {type: 'json'};

const uri = `mongodb+srv://${integrations.mongo.username}:${integrations.mongo.password}@${integrations.mongo.hostname}/${integrations.mongo.database}`;

mongoose.connect(uri);
let db = mongoose.connection;

export default db;
