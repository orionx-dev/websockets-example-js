import pusher from '../../helpers/pusher'
import update from './update'
import orionx from '../../helpers/orionx'
import { set, get } from './state'

export default async function () {
  minute()
  // Get my personal token
  const { token } = await orionx.requestRealtimeToken()

  // Connecto to my private channel
  const channel = pusher.subscribe(`private-${token}`)

  // Get my orders and set on state
  const marketCode = 'CHACLP'
  const orders = await orionx.openOrders({ marketCode: marketCode, limit: 200 })
  set(marketCode, orders)

  // Bind to channel for updates
  channel.bind('orders', update)
}

// Helper function to log current orders every minute
function minute () {
  console.log('Minute starting')
  setTimeout(() => {
    console.log('Minute', get())
    minute()
  }, 60000)
}
