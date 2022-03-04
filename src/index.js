import 'core-js/stable'
import 'regenerator-runtime/runtime'
import orderbook from './public/orderbook'
import trades from './public/trades'
import myOrders from './private/myOrders'
import myWallets from './private/myWallets'
import myTrades from './private/myTrades'

myOrders()
myWallets()
orderbook()
trades()
myTrades()
