const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

app.use('/graph', graphqlHTTP.graphqlHTTP({}));
app.listen(4000., () => {
    console.log('Listening for requests on port 4000!');
})