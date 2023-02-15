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
        (h, s, v) = (float(request.form['H']) / 1000, float(request.form['S']) / 1000, float(request.form['V']) / 1000)
        (r, g, b) = colorsys.hsv_to_rgb(h, s, v)

        pixels.fill((int(r*255), int(g*255), int(b*255)))

    return render_template('index2.html')


@app.route('/turn_off', methods=['GET'])
def turn_off():
    pixels.fill((0, 0, 0))

    return render_template('index2.html')


@app.route('/', methods=['POST'])
def post():
    print(request.get_data().decode())

    return redirect(url_for('index')), 303


if __name__ == '__main__':
    app.run(port=80, host="0.0.0.0")
