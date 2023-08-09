const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const route=require('./routes/todoroutes')

const app = express();
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;
mongoose
.connect(process.env.MONGO_DB)
.then(()=>console.log('connected to MongoDB..'))
.catch((error)=>console.log(error));
app.use(route); 

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));
