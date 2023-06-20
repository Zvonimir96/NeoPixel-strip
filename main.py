from flask import Flask, render_template, redirect, url_for, request
import board
import neopixel
import colorsys

number_of_pixels = 60
pixels = neopixel.NeoPixel(board.D18, number_of_pixels)

app = Flask(__name__)

color = "#FFFFFF"


@app.route('/', methods=['GET'])
def index():
    print(color)
    return render_template('index.html', color=color)


@app.route('/color', methods=['POST'])
def set_color():
    content = request.json

    (r, g, b) = colorsys.hls_to_rgb(content.get('h') / 360, 0.5, content.get('s'))

    global color
    # Color in HEX notation
    color = '#{:02x}{:02x}{:02x}'.format(int(r * 255), int(g * 255), int(b * 255))

    pixels.fill((int(r * 255), int(g * 255), int(b * 255)))

    return redirect("/", code=302)


@app.route('/turn_off', methods=['POST'])
def turn_off():
    global color
    color = "#FFFFFF"

    pixels.fill((0, 0, 0))

    return redirect("/", code=302)


if __name__ == '__main__':
    app.run(port=80, host="0.0.0.0")
