import { get, set } from './state'

export default function (updatedItem) {
  const orderBook = get()

  const key = updatedItem.sell ? 'sell' : 'buy'
  for (var i = 0; i < orderBook[key].length; i++) {
    const item = orderBook[key][i]
    if (item.limitPrice === updatedItem.limitPrice) {
      orderBook[key][i].amount = updatedItem.amount
    }
  }

  // Write our data back to the cache.
  set(orderBook)
}
