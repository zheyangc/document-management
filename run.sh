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

echo "install nodemon"
sudo npm install nodemon -g

echo "install pm2"
sudo npm install pm2 -g