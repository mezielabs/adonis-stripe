/*
 * @mezielabs/adonis-stripe
 *
 * (c) Chimezie Enyinnaya <chimezie@adonismastery.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Mezielabs/Stripe' {
  import Stripe from 'stripe'

  const stripe: Stripe

  export default stripe
}
