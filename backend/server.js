const crypto = require("crypto");
global.crypto = crypto;

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', productRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongo Connected"))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.get('/hello', (req, res) => {
  res.send("Hello Route Working");
});

app.listen(5001, () => {
  console.log('Server Started');
});