const express = require('express');
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

// Route to render the index page
router.get('/', (req, res) => {
    res.render("index", { // corrected the syntax here
        title: 'Mini Messageboard',
        messages: messages
    });
});

// Route to handle new message submission
router.post('/new', (req, res) => {
    const { author, message } = req.body; // Get form data

    if (author && message) {
        messages.push({
            user: author,
            text: message,
            added: new Date()
        });
    }

    // Redirect to the homepage after posting the message
    res.redirect('/');
});

module.exports = router;
