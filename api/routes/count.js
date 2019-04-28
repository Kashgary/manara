const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    global.count++;
    res.status(200).json({
        NumberAllAPIcalled: global.count
    })
});

module.exports = router;