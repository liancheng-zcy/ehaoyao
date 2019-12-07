const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://m.ehaoyao.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/ajax',
    proxy({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
};