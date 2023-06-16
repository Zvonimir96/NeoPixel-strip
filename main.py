from flask import Flask, render_template, redirect, url_for, request
import board
import neopixel
import colorsys

number_of_pixels = 60
pixels = neopixel.NeoPixel(board.D18, number_of_pixels)

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        content = request.json

        (r, g, b) = colorsys.hsv_to_rgb(content.get('h'), content.get('s'), 0.5)

        pixels.fill((int(r*255), int(g*255), int(b*255)))

    return render_template('index.html')


@app.route('/turn_off', methods=['GET'])
def turn_off():
    pixels.fill((0, 0, 0))

    return 200


if __name__ == '__main__':
    app.run(port=80, host="0.0.0.0")
