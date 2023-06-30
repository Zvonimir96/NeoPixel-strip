# About
Simple project for remote control of NeoPixel strip (WS2811). The NeoPixels are wired to the Raspberry Pi, which runs a web page where user can select color to be displayed.
![IMG_20230629_230706](https://github.com/Zvonimir96/Rpi/assets/46999608/e9c5e188-65e7-460b-985b-0b6765a30578)

# Web page
User can preview a color by hovering over the desired location on the color wheel and select it by pressing the left mouse button. A preview of desired color is displayed in the upper left corner. When user selects a color, the background of the button is set to the chosen color to indicate that NeoPixels are active. Clicking the button turns off the NeoPixels and sets the button background to white. Web page also works on mobile devices.
The color wheel is downloaded, and redesigned from the [jbrems](https://github.com/jbrems/color-wheel).
Web page is hosted with Python using the Flask library.
![image](https://github.com/Zvonimir96/Rpi/assets/46999608/05c55ec9-d349-4975-ba99-a49d80379d00)

# Setup raspberry pi
Since controlling the NeoPixels is fairly simple and requires a server to access the website, a Raspberry Pi Zero was chosen as the embedded device for this project. To host a website on a Raspberry Pi, the following steps have to be performed:

## Raspberry Pi wiring
Since NeoPixels are controlled with serial communication, it is necessary to connect the Din pin of the NeoPixels to the GPIO18 pin of the Raspberry. By connecting the GND pin of the NeoPixel to the GND pin of the Raspberry, we ensure that they are at the same potential. For the NeoPixels to work, we need to provide an external power source.
![image](https://github.com/Zvonimir96/Rpi/assets/46999608/d4f1c759-6cee-41b1-867a-8320bf6b4cff)

## Set static ip
In order to access the website, it is necessary to set up a static IP address on the Raspberry. A static IP address is also required because the Raspberry Pi Zero does not support an HMI interface and the only way to set up the web server is to establish SSH communication between the Raspberry and PC. To set the static IP address, please refer to the [link](https://www.ionos.com/digitalguide/server/configuration/provide-raspberry-pi-with-a-static-ip-address/#:~:text=To%20assign%20an%20IP%20address,with%20the%20IPv4%20address%20192.168).

## Instalation of required librarys
Once the SSH connection is established, it is important to install the necessary libraries before downloading the code:
- [Adafruit NeoPixel](https://gist.github.com/vsefer/461acab219755bea26744735fcdbca7f) for controlling NeoPixels
- [Flask](https://pypi.org/project/Flask/) for hosting the web page

## Hosting a server
Now that everything is ready, the programming code can be downloaded from this repository. By running main.py as a Python script, the server is ready to change the color of NeoPixels. If we disconnect the Raspberry from the power supply, the script has to be executed again. To run the script automatically at startup, please follow the instructions [here](https://www.dexterindustries.com/howto/run-a-program-on-your-raspberry-pi-at-startup/).

# Issues
- The representation of the color wheel needs a lot of computing power.

# Upgrades
- Add a temperature sensor to monitor the room temperature.
