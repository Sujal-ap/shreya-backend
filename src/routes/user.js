const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

console.log('Loading user routes');

// Example route
router.get('/', exampleController.getExample);
router.post('/', exampleController.postExample); // Ensure this is correct

console.log('Exporting router from user.js:', router);
module.exports = router;
