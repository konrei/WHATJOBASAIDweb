import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://Samet:58200038@cluster0-dc8zl.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
console.log("its all good dawg");