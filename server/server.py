from flask import Flask
import json
import os
from flask_cors import CORS

app = Flask(__name__,static_folder='./')
CORS(app)

@app.route("/")
def hello():
    return "Backend for Dressing-Room!"

@app.route("/get_init_style")
def getInitStyle():
    filename = os.path.join(app.static_folder, 'initStyle.json')
    with open(filename) as styles:
        data = json.load(styles)
    return data

@app.route("/get_shop_data")
def getShopData():
    filename = os.path.join(app.static_folder, 'shopData.json')
    with open(filename) as styles:
        data = json.load(styles)
    return data

if __name__ == '__main__':
    app.run(host= '192.168.1.125', port=5005, debug=False)
