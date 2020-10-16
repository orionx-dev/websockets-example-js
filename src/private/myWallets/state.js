const wallets = {}

/**
 * Store the ballance of a wallet
 * @param {String} currencyCode The asset symbol
 * @param {Integer} balance The current balance of the wallet
 * @returns {Object} The new wallets object as key value: {'BTC': 1000000}
 */
export function set (currencyCode, balance) {
  if (!currencyCode) {
    return
  }
  wallets[currencyCode] = balance
  return wallets
}

/**
 * Get balance given currencyCode
 * @param {String} currencyCode The currencyCode symbol to get the balance from
 * @returns {Integer} The balance
 */
export function get (currencyCode) {
  if (!currencyCode) return wallets
  return wallets[currencyCode]
}
