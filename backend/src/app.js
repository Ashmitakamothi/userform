
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('./utils/database'); 

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3001;

// Use the mongoose connection object to listen for events
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
