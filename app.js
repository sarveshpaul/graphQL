const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
//const schema = require('./ser');
const db = require('./models');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/graphql', graphqlHTTP({

    schema,
     rootValue: {},
    graphiql: true,

}));




db.sequelize
    .authenticate()
    .then(() => {
        console.log("CONNECTED TO DATABASE");
      })
    .catch(() => {
        console.log("ERROR IN DATABASE CONNECTION");
    });