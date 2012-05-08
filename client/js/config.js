var dojoConfig = {
  async: true,
  cacheBust: true,
  baseUrl: '/js/',
  packages: [
    { name: 'lima', location: 'lima' },
    { name: 'example', location: 'example' }

  ],
  deps: ['example/main']
}
