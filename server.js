const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authenticateUser = require('./middleware/authentication');
const { registerUser, loginUser } = require('./controllers/userController');
const validateData = require('./middleware/validation');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/hotel_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// CRUD endpoints for room types (accessible only by admin)
app.use('/api/v1/users', validateData, userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});