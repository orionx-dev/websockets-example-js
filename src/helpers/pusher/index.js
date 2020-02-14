import Pusher from 'pusher-js'

const pusher = new Pusher('ce386deb63691b2f671c', {
  cluster: 'us2',
  forceTLS: true
})

export default pusher
