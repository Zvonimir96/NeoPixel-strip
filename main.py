from flask import Flask, request

app = Flask(__name__)


@app.route('/', methods=['GET'])
def get():
    print('Zaprimljen GET zahtjev')
    return('Poslali ste GET zahtjev')


@app.route('/', methods=['POST'])
def post():
    print('Zaprimljen POST zahtjev')
    return ('Poslali ste POST zahtjev')


@app.route('/', methods=['PUT'])
def put():
    print('Zaprimljen PUT zahtjev')
    return ('Poslali ste PUT zahtjev')


@app.route('/zajednicka', methods=['POST', 'GET', 'PUT'])
def zajednicka():
    if request.method == 'GET':
        print('Zaprimljen GET zahtjev')
        return ('Poslali ste GET zahtjev')
    if request.method == 'POST':
        print('Zaprimljen POST zahtjev')
        return ('Poslali ste POST zahtjev')
    if request.method == 'PUT':
        print('Zaprimljen PUT zahtjev')
        return ('Poslali ste PUT zahtjev')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)