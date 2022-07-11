const express = require('express');
const uuid = require('uuid').v4;

const router = express.Router();

router.post('/', (req, res) => {
    /**
        request:
            {
                auth_id: string, // id from call to /auth
                amount: number, // integer in smallest currency unit
                hold_open: boolean, // true if auth should be held open for additional captures
                fulfillment_data: {}, // if additional_order_details is true
            }

        response: 
            200:
                {
                    transaction_id: string, // id generated by your application
                }
            4xx/5xx:
                {
                    error_code: string,
                    message: string,
                }
     */
    res.status(200);
    res.send({
        transaction_id: uuid(),
    });
});

module.exports = router;