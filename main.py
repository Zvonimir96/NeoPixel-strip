from flask import Flask, render_template, redirect, url_for, request
import board
import neopixel

number_of_pixels = 59
pixels = neopixel.NeoPixel(board.D18, number_of_pixels)

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index2.html')


@app.route('/turn_off', methods=['GET'])
def turn_off():
    for i in range(number_of_pixels):
        pixels[i] = (0, 0, 0)

    return render_template('index2.html')


@app.route('/turn_on', methods=['GET'])
def turn_on():
    print('on')
    return render_template('index2.html')


@app.route('/set_color', methods=['POST'])
def set_color():
    for i in range(number_of_pixels):
        pixels[i] = (int(request.form['R']), int(request.form['G']), int(request.form['B']))

    return render_template('index2.html')


@app.route('/', methods=['POST'])
def post():
    print(request.get_data().decode())

    return redirect(url_for('index')), 303


if __name__ == '__main__':
    app.run(port=80, host="0.0.0.0")
