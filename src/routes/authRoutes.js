// userRoutes.js

const express = require('express');
const router = express.Router();

// Import any necessary modules or functions
const authMiddleware = require('../middlewares/authMiddleware');

// Define the sign-out route handler
router.post('/signout', authMiddleware, (req, res) => {
  // Perform sign-out logic here
  // For example, clear session data or revoke tokens

  // Respond to the client
  res.status(200).json({ message: 'User signed out successfully' });
});

module.exports = router;
