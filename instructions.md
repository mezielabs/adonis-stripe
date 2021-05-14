The package has been configured successfully. The Adonis Stripe configuration stored inside `config/stripe.ts` file relies on the following environment variables, and hence we recommend validating them.

Open the `env.ts` file and paste the following code inside the `Env.rules` object.

```ts
STRIPE_SECRET_KEY: Env.schema.string()
STRIPE_PUBLIC_KEY: Env.schema.string()
STRIPE_WEBHOOK_SECRET: Env.schema.string()
STRIPE_API_VERSION: Env.schema.string()
STRIPE_TYPESCRIPT: Env.schema.string()
```
