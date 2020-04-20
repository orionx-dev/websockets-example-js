import Pusher from 'pusher-js'

const pusher = new Pusher('ce386deb63691b2f671c', {
  cluster: 'us2',
  forceTLS: true,
  authEndpoint: 'http://localhost:3030'
})

export default pusher
