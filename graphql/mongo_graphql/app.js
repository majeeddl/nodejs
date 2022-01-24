const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost/BookingDB" , { useNewUrlParser : true}).then(()=>{
    console.log("Mongo db connected ...")
}).catch(err=> console.log(err))

const port = process.env.PORT || 4009

app.get("/",(req,res)=>{
    res.send("Node js project is running ...")
})

app.listen(port , ()=> console.log(`Node server is started : ${port}`))