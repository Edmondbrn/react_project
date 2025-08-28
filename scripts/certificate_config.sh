#!/bin/bash -

# Install mkcert on local machine
sudo apt install libnss3-tools
curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"
chmod +x mkcert-v*-linux-amd64
sudo mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert

# install authority for the certification
mkcert -install

# create certificate in a specific folder
mkdir -p ./certs
cd ./certs
mkcert localhost 127.0.0.1 ::1