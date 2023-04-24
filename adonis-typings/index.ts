/*
 * @mezielabs/adonis-stripe
 *
 * (c) Chimezie Enyinnaya <chimezie@mezielabs.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Mezielabs/Stripe' {
	/**
	 * Shape of adonis-stripe config.
	 */
	export interface StripeConfig {
		secretKey: string
		publicKey: string
		webhookSecret: string

		options: {
			apiVersion: string
			typescript?: boolean
		}
	}
}
