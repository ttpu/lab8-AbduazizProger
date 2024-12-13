// Create web server
// Create a new comment
// Read all comments
// Read a comment by id
// Update a comment by id
// Delete a comment by id

const express = require('express');
const router = express.Router();

// Create a new comment
router.post('/', (req, res) => {
    res.send('Create a new comment');
});

// Read all comments
router.get('/', (req, res) => {
    res.send('Read all comments');
});

// Read a comment by id
router.get('/:id', (req, res) => {
    res.send('Read a comment by id');
});

// Update a comment by id
router.put('/:id', (req, res) => {
    res.send('Update a comment by id');
});

// Delete a comment by id
router.delete('/:id', (req, res) => {
    res.send('Delete a comment by id');
});

module.exports = router;