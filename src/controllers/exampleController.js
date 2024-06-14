const Example = require('../models/exampleModel');

const exampleController = {
  getExample: async (req, res) => {
    try {
      console.log('getExample called');
      const examples = await Example.find();
      console.log('Examples found:', examples);
      res.status(200).json(examples);
    } catch (error) {
      console.error('Error fetching examples:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  postExample: async (req, res) => {
    try {
      console.log('postExample called');
      const { firebaseId, email, name, description } = req.body; // Include name and description
      console.log('Received user data:', { firebaseId, email, name, description });

      const newExample = new Example({
        firebaseId,
        email
      });

      await newExample.save();
      console.log('New example saved:', newExample);

      res.status(201).json({ message: 'User data received successfully', data: newExample });
    } catch (error) {
      console.error('Error saving new example:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

console.log('Exporting exampleController:', exampleController);
module.exports = exampleController;
