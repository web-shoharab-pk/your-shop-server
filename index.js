const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const port = 4000
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qkzne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const product = client.db(process.env.DB_NAME).collection("products");
    
 
 
//   client.close();
});











app.get('/', (req, res) => {
  res.send('Hello World! Ok!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})