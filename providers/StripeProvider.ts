/*
 * @mezielabs/adonis-stripe
 *
 * (c) Chimezie Enyinnaya <chimezie@adonismastery.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ApplicationContract } from '@ioc:Adonis/Core/Application'

import Stripe from 'stripe'

export default class StripeProvider {
	constructor(protected app: ApplicationContract) {}

	public async register() {
		this.app.container.singleton('Mezielabs/Stripe', () => {
			const { secretKey, options } = this.app.container.use('Adonis/Core/Config').get('stripe')

			return new Stripe(secretKey, options)
		})
	}
}
