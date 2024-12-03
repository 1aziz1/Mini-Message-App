const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs'); // Corrected 'View engine' to 'view engine'

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const indexRouter = require('./routes/index');  // Route for the homepage and posting messages
const newMessagesRouter = require('./routes/newMessages'); // Route for the new message form

// Use routes
app.use('/', indexRouter);  // Main route to show messages
app.use('/', newMessagesRouter);  // Route for the new message form

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
