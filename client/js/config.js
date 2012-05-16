var dojoConfig = {
  async: true,
  cacheBust: true,
  baseUrl: '/js/',
  packages: [
    { name: 'dojo', location: 'dojo' },
    { name: 'dijit', location: 'dijit' },
    { name: 'lima', location: 'lima' },
    { name: 'example', location: 'example' }

  ],
  deps: ['example/main']
}
