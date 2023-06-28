# About
Simple project for remote control of neopixel strip. The neopixels are wired to the Raspberry Pi, which runs a web page where user can select color to be displayed.

# Web page
User can preview a color by hovering over the desired color on the color wheel and select color with the mouse click. A preview of selected color is displayed in the upper left corner. When user selects a color, the background of the button is set to the chosen color. Clicking the button turns off the neopixel strip and sets the button background to white.
The color wheel is downloaded from the link: https://github.com/jbrems/color-wheel.
Web page is hosted in Python using the Flask library.

![image](https://github.com/Zvonimir96/Rpi/assets/46999608/05c55ec9-d349-4975-ba99-a49d80379d00)

# Setup raspberry pi
Zbog jednostavnosti projekta za upravljanje neopixelima je odabran raspberry pi zero. Budući da rpi zero nema hmi sučelje može mu se isključivo pristupiti uz pomoć ssh linije za što je potrebno postaviti statičku ip adresu. Također statička ip adresa se mora i postaviti kako bi korisnik mogao pristupiti stranici koja je hostana na rpiu. Link za postavljanje statičke ip adrese se nalazi na liku.
Nakon postavljanja statičke ip adrese potrebno je prebaciti programski 

U projektu se koristio rpi 0 preko SSH linije.
Prvo je bilo potrebno omogućiti spajanje ssh linije i postavljanje statičke ip adrese.
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
