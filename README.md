<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Adonis Stripe](#adonis-stripe)
  - [Installation](#installation)
  - [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Adonis Stripe

> Stripe provider for AdonisJS 5

[![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url]

This packages makes it seamless to work with Stripe in AdonisJS 5 applications.

## Installation

Install the package using either npm or yarn:

```bash
npm i @mezielabs/adonis-stripe
# or
yarn add @mezielabs/adonis-stripe
```

Then, configure the package using the `configure` command:

```bash
node ace configure @mezielabs/adonis-stripe
```

This package needs to be configured with your Stripe account's API keys, which you can get from your [Stripe Dashboard](https://dashboard.stripe.com/account/apikeys). Also, you can specify the API version as well as your webhook secret.

```txt
// .env

STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
STRIPE_PUBLIC_KEY=YOUR_STRIPE_PUBLISHABLE_KEY
STRIPE_API_VERSION=STRIPE_API_VERSION // defaults to Stripe account's API version
STRIPE_WEBHOOK_SECRET=YOUR_STRIPE_WEBHOOK_SECRET
```

## Usage

```ts
import Stripe from '@ioc:Mezielabs/Stripe'

async checkout ({ view }) {
  paymentIntent = await Stripe.paymentIntents.create({
    amount: 1900,
    currency: 'usd'
  })
}
```

This package is built top of [`stripe-node`](https://github.com/stripe/stripe-node). For usage, see the [stripe-node API docs](https://stripe.com/docs/api?lang=node) for Node.js.

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[npm-image]: https://img.shields.io/npm/v/adonis-stripe.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/adonis-stripe "npm"

[license-image]: https://img.shields.io/npm/l/adonis-stripe?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"
