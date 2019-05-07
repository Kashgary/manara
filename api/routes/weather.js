const express = require('express');
const router = express.Router();
const accuweather = require('node-accuweather')()('jnhiPmfXd3Xmx0h7HD0fGPOF8AqT7Ozz');

router.post('/:city', (req, res, next) => {

    const city = req.params.city;
    global.count++;
    accuweather.getCurrentConditions(city, { unit: "Celsius" }).then(function (result) {
        res.status(200).json({
            city: city,
            weather: result
        })
    });
});

module.exports = router;