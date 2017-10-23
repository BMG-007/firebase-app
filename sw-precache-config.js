module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
      'dist/index.html',
      'dist/**.js',
      'dist/**.css'
    ]
  };
  runtimeCaching: [{
    urlPattern: "http://localhost:4200",
    handler: 'networkFirst'
  }]