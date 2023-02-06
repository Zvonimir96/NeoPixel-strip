from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/', methods=['POST'])
def post():

    print('test')
    return redirect(url_for('index')), 303


if __name__ == '__main__':
    app.run(port="80", host="0.0.0.0")
