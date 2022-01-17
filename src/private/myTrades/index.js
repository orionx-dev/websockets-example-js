import pusher from '../../helpers/pusher'
import update from './update'
import orionx from '../../helpers/orionx'

export default async function () {
  // Connecto to my private channel
  const channel = pusher.subscribe(`private-${token}`)

  // Bind to channel for updates
  channel.bind('trade', update)

}
