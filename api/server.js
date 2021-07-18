require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { connectDB } = require('./DB/DB');
const authRouter = require('./Routes/authRouter');

const app = express();

app.use(cors());

connectDB();

app.use('/api', authRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running at port ${port}...`));
