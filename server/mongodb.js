import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '../.env.js';

console.log('MONGODB_URI from .env.js:', MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI, options);
  clientPromise = client.connect();
}

export default clientPromise;
