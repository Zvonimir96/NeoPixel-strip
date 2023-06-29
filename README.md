# About
Simple project for remote control of NeoPixel strip (WS2811). The NeoPixels are wired to the Raspberry Pi, which runs a web page where user can select color to be displayed.

# Web page
User can preview a color by hovering over the desired location on the color wheel and select it by pressing the left mouse button. A preview of desired color is displayed in the upper left corner. When user selects a color, the background of the button is set to the chosen color to indicate that NeoPixels are active. Clicking the button turns off the NeoPixels and sets the button background to white. Web page also works on mobile devices.
The color wheel is downloaded, and redesigned from the [jbrems](https://github.com/jbrems/color-wheel).
Web page is hosted with Python using the Flask library.
![image](https://github.com/Zvonimir96/Rpi/assets/46999608/05c55ec9-d349-4975-ba99-a49d80379d00)

# Setup raspberry pi
Since controlling the NeoPixels is fairly simple and requires a server to access the website, a Raspberry Pi Zero was chosen as the embedded device for this project. To host a website on a Raspberry Pi, the following steps have to be performed:

## Raspberry Pi Wiring


I ostaviti link kako se kontrolira i preuzeti biblioteku.
![image](https://github.com/Zvonimir96/Rpi/assets/46999608/d4f1c759-6cee-41b1-867a-8320bf6b4cff)


## Set static ip
In order to access the website, it is necessary to set up a static IP address on the Raspberry. A static IP address is also required because the Raspberry Pi Zero does not support an HMI interface and the only way to set up the web server is to establish SSH communication between the Raspberry and PC. To set the static IP address, please refer to the [link](https://www.ionos.com/digitalguide/server/configuration/provide-raspberry-pi-with-a-static-ip-address/#:~:text=To%20assign%20an%20IP%20address,with%20the%20IPv4%20address%20192.168).

## Run flask app on startup
Zatim pullati kod s githuba i postaciti da se prilikom sturtapa pokreće python skripta.
Osim toga potrebno je spojiti neopixele na rpi

# Issues
Mora se reloadati svakim setanjem boja zato što mi onda gumb ne radi kako želim
Vjerojatno posotoji bolji način za crtanje color wheela

# Upgread
Dodati senzor temperature i monitorati temperaturu prustorije zapisvianejm u sqlite bazu podataka
Nadograditi da se stranica hosta na rpi a da se neopixeli upravljaju uz pomoć espa.
