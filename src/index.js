require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authMiddleware = require('./middlewares/authMiddleware');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/authRoutes');  // Import the auth routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleware);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Connection error:', error);
  process.exit(1);
});

// Define the user routes
app.use('/user', userRoutes);

// Define the auth routes
app.use('/api', authRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
