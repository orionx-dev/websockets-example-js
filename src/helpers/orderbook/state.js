let orderbook = {}

function set (newOrderbook) {
  orderbook = newOrderbook
  console.log('new orderbook')
  console.log(newOrderbook)
}

function get () {
  return orderbook
}

export default {
  get,
  set
}
