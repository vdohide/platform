import http from 'http';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({
  ws: true // รองรับ WebSocket สำหรับ Next.js Hot Reload
});

// กำหนดว่า Domain ไหน จะชี้ไปที่ Port อะไร
const routes = {
  'vdohide.org': 'http://127.0.0.1:3000',        // web
  'admin.vdohide.org': 'http://127.0.0.1:3001', // admin
  'api.vdohide.org': 'http://127.0.0.1:4000', // api
  // 'preview.vdohide.org': 'http://127.0.0.1:8083', // preview
  // 'static.vdohide.org': 'http://127.0.0.1:8082', // static
  // 'cdn.vdohide.org': 'http://127.0.0.1:8082', // cdn
  // 'play.vdohide.org': 'http://127.0.0.1:8082', // hls m3u8
};

const server = http.createServer((req, res) => {
  const host = req.headers.host;
  const target = routes[host];

  if (target) {
    proxy.web(req, res, { target }, (err) => {
      res.writeHead(502, { 'Content-Type': 'text/plain' });
      res.end(`Bad Gateway: ${err.message}`);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Proxy Route Not Found: ' + host);
  }
});

// รองรับการ Upgrade Connection สำหรับ WebSocket
server.on('upgrade', (req, socket, head) => {
  const host = req.headers.host;
  const target = routes[host];
  if (target) {
    proxy.ws(req, socket, head, { target }, (err) => {
      socket.end();
    });
  }
});

server.listen(80, () => {
  console.log('✅ Reverse Proxy is running on port 80');
  console.log('Proxy Routes:');
  Object.keys(routes).forEach(domain => {
    console.log(`- http://${domain} -> ${routes[domain]}`);
  });
});
