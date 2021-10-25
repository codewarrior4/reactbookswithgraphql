const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()



try {
    mongoose.connect('mongodb+srv://codewarrior:etisalat123@cluster0.uqx2w.mongodb.net/test')
    mongoose.connection.once('open',()=>{
        console.log("Database connected")
    })
} catch (e) {
    console.log("e ="+error)
}
app.use(cors())
app.use('/graphql',graphqlHTTP.graphqlHTTP({
    schema,
    graphiql:true
    
}))

app.listen(4000,()=>{
    console.log('Now server is running')
}) 