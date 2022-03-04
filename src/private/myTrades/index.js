import pusher from '../../helpers/pusher'
import update from './update'
import orionx from '../../helpers/orionx'

export default async function () {
  // Get my personal token
  const { token } = await orionx.requestRealtimeToken()

  // Connecto to my private channel
  const channel = pusher.subscribe(`private-${token}`)

  // Bind to channel for updates
  channel.bind('trade', update)
}
