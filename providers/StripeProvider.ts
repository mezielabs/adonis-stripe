/*
 * @mezielabs/adonis-stripe
 *
 * (c) Chimezie Enyinnaya <chimezie@adonismastery.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { IocContract } from '@adonisjs/fold'
import Stripe from 'stripe'

export default class StripeProvider {
	constructor(protected container: IocContract) {}

	public async register() {
		this.container.singleton('Mezielabs/Stripe', () => {
			const { secretKey, options } = this.container.use('Adonis/Core/Config').get('stripe')

			return new Stripe(secretKey, options)
		})
	}
}
