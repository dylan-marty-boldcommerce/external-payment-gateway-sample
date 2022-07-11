const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    /**
        request:
            {
                authorization_id: string, // id from /auth call
            }

        response:
            200:
                no data
            4xx/5xx:
                {
                    error_code: string,
                    message: string,
                }
     */
    res.status(200);
    res.send();
});

module.exports = router;