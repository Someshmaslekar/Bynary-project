const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const profilesRoutes = require('./routes/profiles');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/profiles', profilesRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
