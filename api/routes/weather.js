const express = require('express');
const router = express.Router();
const accuweather = require('node-accuweather')()('1WxNucE1QpzqvuqYAU3PjXzRvebxqfNZ');

router.post('/:city', (req, res, next) => {

    const city = req.params.city;

    accuweather.getCurrentConditions(city, { unit: "Celsius" }).then(function (result) {
        res.status(200).json({
            city: city,
            weather: result
        })

    });

});

module.exports = router;