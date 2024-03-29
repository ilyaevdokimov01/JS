const { MongoClient } = require("mongodb");

async function connectToMongoDB() {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("express");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

module.exports = connectToMongoDB;
