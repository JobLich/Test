self.addEventListener('install', function (e) {
  self.skipWaiting()
  console.log('hola')
})

self.addEventListener('activate', function (e) {
    console.log('hola2')
})
