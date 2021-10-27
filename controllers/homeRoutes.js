const router = require("express").Router();
const path = require('path');

//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
//The path.join() method joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting path.

//route for "/"
router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));

    }
    catch (err) {
        res.status(500).json(err);
    }
});

//route for your dashboard (stats)
router.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));

    }
    catch (err) {
        res.status(500).json(err);
    }
});

//route for a new workout
router.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));

    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;