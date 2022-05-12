const express = require('express');
const mongoose = require('mongoose');

// Set up an instance of express
const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// Set up mongo connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Log mongo queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));