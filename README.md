# About
Simple project for remote control of neopixel strip. The neopixels are wired to the Raspberry Pi, which runs a web page where user can select color to be displayed.

# Web page

Web stranica koja se otvara je većinom kopirana s git linka: https://github.com/jbrems/color-wheel
stranica je prilagođena za korištenje mobitelom ili kompjuterom. Prilikom howeranja ili draganjem prsta se prikazuje odabrani uzorak boje u gornjem desnom kutu. Prilikom klika miša ili tuch end se odabrana boja postavlja na neopixele. Ispod color wheela je gumb koji služi za gašenje neopixela. Ako je odabrana neka boja onda gumb svijetli tom bojom.

![image](https://github.com/Zvonimir96/Rpi/assets/46999608/05c55ec9-d349-4975-ba99-a49d80379d00)


# Setup raspberry pi
U projektu se koristio rpi 0 preko SSH linije.
Prvo je bilo potrebno omogućiti spajanje ssh linije i postavljanje statičke ip adrese.
Zatim pullati kod s githuba i postaciti da se prilikom sturtapa pokreće python skripta.
Osim toga potrebno je spojiti neopixele na rpi

## Set static ip

## Run flask app on startup

## Shema spajanja RPI

# Issues
Mora se reloadati svakim setanjem boja zato što mi onda gumb ne radi kako želim
Vjerojatno posotoji bolji način za crtanje color wheela
