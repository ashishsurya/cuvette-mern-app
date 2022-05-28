require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// import router
const routes = require('../routes/routes');

const PORT = 3001;

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});
const app = express();

app.use(express.json());

app.use('/api', routes);

app.listen(3001, () => {
  console.log(`Server Started at http://localhost:3001`);
});
