const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','angular-frontend','src', 'app', 'app.component.html'))
});

module.exports = router;