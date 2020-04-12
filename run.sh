#!/bin/bash

# usage ./run [start|restart|startNew|stop] [dev|prod]
ACTION="start"
ENV="dev"
PARAMS=""

while (( "$#" )); do
  case "$1" in
    start|restart|stop|startNew)
      ACTION=$1
      shift 
      ;;
    dev|stg|prod)
      ENV=$1
      shift 
      ;;
    --) # end argument parsing
      shift
      break
      ;;
    -*|--*=) # unsupported flags
      echo "Error: Unsupported flag $1" >&2
      exit 1
      ;;
    *) # preserve positional arguments
      PARAMS="$PARAMS $1"
      shift
      ;;
  esac
done

echo "=================================="
echo $ACTION $ENV
echo "=================================="

if [ "$ENV" == "prod" ]
then
	PM2_START_COMMAND="pm2 start ecosystem.config.js --env production"
else 
	PM2_START_COMMAND="pm2 start"
fi

echo $PM2_START_COMMAND

case "$ACTION" in 
	"start")
		echo "starting service..."
		eval "$PM2_START_COMMAND"
		;;
	"restart")
		echo "stop service..."
		pm2 stop all
		echo "pull latest master"
		git checkout . & git pull
		echo "install new dependence"
		cd client
		sudo npm install
		cd ../server 
		sudo npm install
		cd ..
		echo "starting service..."
		eval "$PM2_START_COMMAND" 
		;;
	"stop")
		echo "stop service..."
		pm2 stop all
		;;
	"startNew")
		echo "pull latest master"
		git checkout . & git pull
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
		;;
	*)
esac

