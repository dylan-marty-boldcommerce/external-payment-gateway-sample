const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    /**
        request:
            {
                provider_id: string, // key from config
                token: string, // up to you
                customer_data: {
                    email: "jon@contoso-4.com",
                    first_name: "Jonathan",
                    last_name: "Reichert",
                },
                billing_address: {},
                third_party_parameters: {}, // anything else passed into Add Payment endpoint
            }
        
        response:
            200:
                {
                    token: string, // req.body.token
                    avs_response: string, // AVS response code
                    cvd_response: string, // CVD response code
                }
            4xx/5xx:
                {
                    error_code: string,
                    message: string,
                }
     */
    // TODO: validate req.providerId as middleware
    res.status(200);
    res.send({
        token: req.body.token,
        avs_response: 'Y', // Street address and 5-digit zip match
        cvd_response: 'M', // Moneris match
    });
});

module.exports = router;