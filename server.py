from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

# Cambiar al directorio donde están los archivos estáticos
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Configurar y iniciar el servidor
server_address = ('', 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
print('Servidor iniciado en http://localhost:8000')
httpd.serve_forever() 