const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const route=require('./routes/todoroutes')

const app = express();
const PORT = process.env.PORT || 4000;
mongoose
.connect(process.env.MONGO_DB)
.then(()=>console.log('connected to MongoDB..'))
.catch((error)=>console.log(error));

app.route(route); 

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));
