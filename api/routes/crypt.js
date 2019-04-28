const express = require('express');
const router = express.Router();

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

router.post('/encrypt', (req, res, next) => {
    const message = req.body.message;
    const encryptedString = cryptr.encrypt(message);
    res.status(201).json({
        message: encryptedString
    });
});

router.post('/decrypt', (req, res, next) => {
    const message = req.body.message;
    const decryptedString  = cryptr.decrypt(message);
    res.status(201).json({
        message: decryptedString 
    });
});

module.exports = router;