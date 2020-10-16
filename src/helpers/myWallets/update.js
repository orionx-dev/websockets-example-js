import { set } from './state'

/**
 * Update a wallet available balance object
 * @param {Object} wallet The incoming wallet change event
 */
export default function (wallet) {
  console.log('wallets update', wallet)
  const { currencyCode, balance, usedBalance } = wallet

  set(currencyCode, balance - usedBalance)
}
