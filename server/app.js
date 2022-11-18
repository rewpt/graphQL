require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');

const userPw = process.env.CONNECTION_STRING;
const uri = `mongodb+srv://rewpt:${userPw}@graphqlproject.jzybpgq.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

console.log(userPw);
// connect to mongo-db-atlas db
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const port = 4000;

app.listen(port, () => {
  console.log(`{now listening on port ${port}}`);
});
