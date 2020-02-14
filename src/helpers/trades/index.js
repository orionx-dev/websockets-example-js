import pusher from '../pusher'
import newTrade from './newTrade'

export default function () {
  const channel = pusher.subscribe('prod-BTCCLP-trades')
  channel.bind('new-trade', newTrade)
}
