// backend/routes/api/index.js
const router = require('express').Router();

module.exports = router;

router.post('/sum', function(req, res) {
    const { valueOne, valueTwo} = req.body;

    if(Number.isNaN(+valueOne) || Number.isNaN(+valueTwo)) {
        return res.status(400).json({ message: "This is an invalid request" });
    }

    const answer = +valueOne + +valueTwo;

    return res.json({answer});
});