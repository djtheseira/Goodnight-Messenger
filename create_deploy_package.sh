#!/bin/bash

# A script that will create the zip file for the chrome extension

rm -rf goodnightmessenger/
mkdir -p goodnightmessenger/images

gulp css

cp images/night16.png ./goodnightmessenger/images
cp images/night32.png ./goodnightmessenger/images
cp images/night128.png ./goodnightmessenger/images
cp images/sun16.png ./goodnightmessenger/images
cp mingoodnight.css ./goodnightmessenger
cp turn_lights_off.js ./goodnightmessenger
cp turn_lights_on.js ./goodnightmessenger
cp background.js ./goodnightmessenger
cp driver.js ./goodnightmessenger
cp manifest.json ./goodnightmessenger
cp goodnightmessenger.pem ./goodnightmessenger/key.pem


zip -r goodnightmessenger goodnightmessenger