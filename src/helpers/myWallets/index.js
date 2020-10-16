import pusher from '../pusher'
import update from './update'
import orionx from '../orionx'
import { set, get } from './state'

export default async function () {
  minute()
  // Get my personal token
  const { token } = await orionx.requestRealtimeToken()

  console.log('token is', token)

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
