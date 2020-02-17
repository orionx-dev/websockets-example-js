import 'core-js/stable'
import 'regenerator-runtime/runtime'
import orderbook from './helpers/orderbook'
import trades from './helpers/trades'
import myOrders from './helpers/myOrders'

myOrders()
orderbook()
trades()
