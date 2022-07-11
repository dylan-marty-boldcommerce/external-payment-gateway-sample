# external-payment-gateway-sample

Sample Third Party Payment Gateway

## Description

The Checkout Example Third-Party Payment Gateway is intended to demonstrate the basic functionality of integrating a Payment Gateway with Bold Checkout. The example gateway is capable of the following:

- Retaining payment methods for tokenization
- Authorizing payment
- Capturing funds
- Voiding authorizations
- Refunding captures

This repository is free to fork and use; to connect your payment gateway with Bold Checkout, you will need to TODO: Some good stuff here. Refer to the [Getting Started Guide](https://developer.boldcommerce.com/default/guides/checkout/plugins/getting-started) for more information.

## Getting Started

1. Clone this repository.

2. Install npm dependencies.

   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env`.

   ```sh
   cp .env.example .env
   ```

4. Set the following environment variables in `.env`.

   ```.env
   PORT={Your preferred port number}
   ```

5. Start your plugin server.

   ```sh
   npm run start
   ```

6. Expose your server to the internet. In a development environment you can use services like [ngrok](https://ngrok.com/) or [Cloudflare Tunnel](https://blog.cloudflare.com/tunnel-for-everyone/) to achieve this.

## Customization

Feel free to modify this plugin to suit your use case. There are several things to keep in mind when doing so:

Or are there?

## Documentation

For more information, refer to the following guides in the Bold Developer Documentation:
