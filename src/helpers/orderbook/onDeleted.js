import { get, set } from './state'

export default function (deleteItem) {
  const orderBook = get()

  const key = deleteItem.sell ? 'sell' : 'buy'
  for (var i = 0; i < orderBook[key].length; i++) {
    const item = orderBook[key][i]
    if (item.limitPrice === deleteItem.limitPrice) {
      orderBook[key].splice(i, 1)
    }
  }

  // Write our data back to the cache.
  set(orderBook)
}
