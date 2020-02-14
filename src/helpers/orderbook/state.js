let orderbook = {}

export function set (newOrderbook) {
  orderbook = newOrderbook
  console.log('new orderbook')
  console.log(newOrderbook)
}

export function get () {
  return orderbook
}
