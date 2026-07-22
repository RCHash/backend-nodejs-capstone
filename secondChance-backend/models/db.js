// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = connectToDatabase();
const dbName = `${process.env.MONGO_DB}`;

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    try {
        // connect to the mongodb client
        await client.connect();
        console.log("Successfully connected to the server");
    } catch(err) {
        // log the error
        console.error(err);
    }

    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance=client.db(dbName)

    // Task 3: Return database instance
    return dbInstance;
}

module.exports = connectToDatabase;
