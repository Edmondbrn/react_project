import os
import sys
import ssl
from django.core.management.commands.runserver import Command as RunserverCommand

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

from django.conf import settings
from django.core.management import execute_from_command_line
from django.core.servers.basehttp import WSGIServer

if __name__ == '__main__':
    # Vérifie que les certificats existent
    if not os.path.exists(settings.SSL_CERTIFICATE) or not os.path.exists(settings.SSL_KEY):
        print(f"Error, SSL certificate cannot be found ({settings.SSL_CERTIFICATE}, {settings.SSL_KEY})")
        sys.exit(1)
        
    # Add SSL options
    if len(sys.argv) == 1:
        sys.argv.append('runserver')
    if len(sys.argv) == 2:
        sys.argv.append('0.0.0.0:8443')
    
    print(f"Using SSL certificate: {settings.SSL_CERTIFICATE}")
    print(f"Using SSL key: {settings.SSL_KEY}")
    
    WSGIServer.allow_reuse_address = True
    
    # Patch the server to use SSL
    _old_init = WSGIServer.__init__
    
    def _init(self, *args, **kwargs):
        _old_init(self, *args, **kwargs)
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        # Charger le certificat et la clé
        context.load_cert_chain(
            certfile=settings.SSL_CERTIFICATE, 
            keyfile=settings.SSL_KEY
        )
        # Appliquer le contexte au socket
        self.socket = context.wrap_socket(
            self.socket,
            server_side=True
        )
    
    WSGIServer.__init__ = _init
    
    execute_from_command_line(sys.argv)