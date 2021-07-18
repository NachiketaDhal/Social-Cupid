require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { connectDB } = require('./DB/DB');

const app = express();

app.use(cors());

connectDB();

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running at port ${port}...`));
