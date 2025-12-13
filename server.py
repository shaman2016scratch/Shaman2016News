import http.server
import socketserver
import os

PORT = 5000
HOST = "0.0.0.0"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split('?')[0]
        
        if path.endswith('/'):
            path = path + 'index.html'
        
        file_path = '.' + path
        
        if not os.path.exists(file_path) and not path.endswith('.html'):
            html_path = file_path + '.html'
            if os.path.exists(html_path):
                self.path = path + '.html'
        
        return super().do_GET()
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

class ReuseAddrServer(socketserver.TCPServer):
    allow_reuse_address = True

with ReuseAddrServer((HOST, PORT), CustomHandler) as httpd:
    print(f"Serving at http://{HOST}:{PORT}")
    httpd.serve_forever()
