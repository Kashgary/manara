const express = require('express');
const router = express.Router();
const accuweather = require('node-accuweather')()('Y2049OcMZ2Dj3D6Ys4sFNAO6KU92nnA2');

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
