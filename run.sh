#!/bin/bash

echo "update apt" 
sudo apt update 

echo "install curl" 
sudo apt install curl

echo "install nodejs and npm"
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "install nginx"
sudo apt install -y nginx

echo "install mongodb"
sudo apt install -y mongodb

echo "update npm"
sudo npm update

echo "install nodemon"
sudo npm install nodemon -g

echo "install pm2"
sudo npm install pm2 -g

echo "install packages for server"
cd server
sudo npm install

echo "install packages for client"
cd ../client
sudo npm install

cd ../
echo "starting service..."
pm2 start