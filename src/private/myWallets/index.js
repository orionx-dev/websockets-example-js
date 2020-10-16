import pusher from '../../helpers/pusher'
import orionx from '../../helpers/orionx'
import update from './update'
import { set, get } from './state'

export default async function () {
  minute()
  // Get my personal token
  const { token } = await orionx.requestRealtimeToken()

  // Connecto to my private channel
  const channel = pusher.subscribe(`private-${token}`)

  // Get my orders and set on state
  const wallets = await orionx.wallets({})
  // console.log(wallets)
  for (const wallet of wallets) {
    set(wallet.currency.code, wallet.balance)
  }

  // Bind to channel for updates
  channel.bind('wallets', update)
}

// Helper function to log current tracked wallets every minute
function minute () {
  console.log('Minute starting')
  setTimeout(() => {
    console.log('Minute', get())
    minute()
  }, 60000)
}
