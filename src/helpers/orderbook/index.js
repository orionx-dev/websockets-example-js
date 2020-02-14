import pusher from '../pusher'
import Orionx from '../orionx'
import onNew from './onNew'
import onUpdated from './onUpdated'
import onDeleted from './onDeleted'
import { set } from './state'

export default async function () {
  const channel = pusher.subscribe('prod-BTCCLP-orderbook')
  try {
    const orderbook = await Orionx.marketOrderBook({ code: 'BTCCLP' })
    set(orderbook)
    channel.bind('new', onNew)
    channel.bind('updated', onUpdated)
    channel.bind('deleted', onDeleted)
  } catch (e) {
    console.log('Ocurrió un error', e)
  }
}
