import { get, set } from './state'

export default function (newItem) {
  const orderBook = get()
  const key = newItem.sell ? 'sell' : 'buy'
  let index = 0
  for (var i = 0; i < orderBook[key].length; i++) {
    const item = orderBook[key][i]
    if (newItem.sell && item.limitPrice > newItem.limitPrice) {
      index = i
      break
    }
    if (!newItem.sell && item.limitPrice < newItem.limitPrice) {
      index = i
      break
    }
    index = i + 1
  }

  orderBook[key].splice(index, 0, {
    limitPrice: newItem.limitPrice,
    amount: newItem.amount
  })

  // Write our data back to the cache.
  set(orderBook)
}
