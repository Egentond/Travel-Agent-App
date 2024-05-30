require('dotenv').config();
const express = require('express');
const { logger } = require('./middleware/logEvents');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn')
const PORT = process.env.PORT || 3000;                                  

// connect to MongoDb
connectDB(); 

// log all requests
app.use(logger);

app.use(cors());
app.use(express.json());

// routes
app.use('/', require('./routes/root'));

app.use('/destinations', require('./routes/destinations'));


// Start server
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log(`Server is running on port ${PORT}`));
});