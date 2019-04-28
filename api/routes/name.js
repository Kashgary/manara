const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const names = req.body;
    global.count++;
    const jsonAsArray = Object.keys(names).map(function (key) {
        return names[key];
      })
      .sort(function (itemA, itemB) {
        return itemA.name > itemB.name;
      });
    res.status(201).json({
        yourRequest: names,
        ascendingly: jsonAsArray
    });
});

module.exports = router;