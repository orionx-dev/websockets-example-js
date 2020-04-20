import pusher from '../pusher'
import onInserted from './onInserted'
import onUpdated from './onUpdated'

export default function () {
  const channel = pusher.subscribe('private-HtAM6ygsbErqagFdtDdSjtoEMCApEr62zC')
  channel.bind('insert', onInserted)
  channel.bind('update', onUpdated)
}
