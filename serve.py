import http.server
import socketserver
import os
from pathlib import Path

PORT = 4397
script_dir = Path(__file__).resolve().parent

os.chdir(script_dir)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving {script_dir} on port {PORT}")
    httpd.serve_forever()