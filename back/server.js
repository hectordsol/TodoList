const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const route=require('./routes/todoroutes');

const app = express();
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('cors');

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');//CORS); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const PORT = process.env.PORT || 4000;
mongoose
.connect(process.env.MONGO_DB)
.then(()=>console.log('connected to MongoDB..'))
.catch((error)=>console.log(error));
app.use(route); 

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));
