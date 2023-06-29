# About
Simple project for remote control of neopixel strip. The neopixels are wired to the Raspberry Pi, which runs a web page where user can select color to be displayed.

# Web page
User can preview a color by hovering over the desired color on the color wheel and select color with the mouse click. A preview of selected color is displayed in the upper left corner. When user selects a color, the background of the button is set to the chosen color. Clicking the button turns off the neopixel strip and sets the button background to white.
The color wheel is downloaded from the [link](https://github.com/jbrems/color-wheel).
Web page is hosted with Python using the Flask library.

![image](https://github.com/Zvonimir96/Rpi/assets/46999608/05c55ec9-d349-4975-ba99-a49d80379d00)

# Setup raspberry pi
Since controlling the neopixel strips is fairly simple and requires a server to access the website, a Raspberry Pi Zero was chosen as the embedded device for this project. In order to access the website, it is necessary to set up a static IP address on the Raspberry. A static IP address is also required because the Raspberry Pi Zero does not support an HMI interface and the only way to set up the web server is to establish SSH communication between the Raspberry and PC. To set the static IP address, please refer to the [link](https://www.ionos.com/digitalguide/server/configuration/provide-raspberry-pi-with-a-static-ip-address/#:~:text=To%20assign%20an%20IP%20address,with%20the%20IPv4%20address%20192.168).


Zatim pullati kod s githuba i postaciti da se prilikom sturtapa pokreće python skripta.
Osim toga potrebno je spojiti neopixele na rpi

https://www.ionos.com/digitalguide/server/configuration/provide-raspberry-pi-with-a-static-ip-address/#:~:text=To%20assign%20an%20IP%20address,with%20the%20IPv4%20address%20192.168.

## Set static ip

## Run flask app on startup

## Shema spajanja RPI

# Issues
Mora se reloadati svakim setanjem boja zato što mi onda gumb ne radi kako želim
Vjerojatno posotoji bolji način za crtanje color wheela

# Upgread
Dodati senzor temperature i monitorati temperaturu prustorije zapisvianejm u sqlite bazu podataka
