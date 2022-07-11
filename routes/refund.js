const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    /**
        request:
            {
                amount: number, // int in base currency units
                transaction_id: string, // id returned from /capture call
                reason: string,
                refund_data: {}, // match current behaviour for what's sent on refund
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