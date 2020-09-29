const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://07b18aceafe1.ngrok.io/',
      changeOrigin: true,
    })
  );
};