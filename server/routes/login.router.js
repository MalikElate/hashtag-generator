const express = require('express');
const router = express.Router();
// const { rejectUnauthenticated } = require('../modules/authentication-middleware'); 

router.post('/', (req, res) => {
    console.log("boffa")
});

module.exports = router;
