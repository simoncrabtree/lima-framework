var dojoConfig = {
  async: true,
  cacheBust: true,
  baseUrl: '/js/',
  packages: [
    { name: 'dojo', location: 'dojo' },
    { name: 'dijit', location: 'dijit' },
    { name: 'dgrid', location: 'dgrid' },
    { name: 'xstyle', location: 'xstyle' },
    { name: 'put-selector', location: 'put-selector' },
    { name: 'lima', location: 'lima' },
    { name: 'example', location: 'example' }

  ],
  deps: ['example/main']
}
