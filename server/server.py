from flask import Flask
import json
import os
from flask_cors import CORS

app = Flask(__name__,static_folder='./')
CORS(app)

HOST='192.168.1.125'

@app.route("/")
def hello():
    return "<h1>Backend for Dressing room</h1><a href='/get_init_style'>GET ALL MODEL PART: /get_init_style</a></br><a href='/get_shop_data'>GET ALL SHOPS ITEM PART: /get_shop_data</a></br><a href='/get_button_array'>GET ALL BUTTONS: /get_button_array</a>"

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

@app.route("/get_button_array")
def getShopData():
    filename = os.path.join(app.static_folder, 'buttonArray.json')
    with open(filename) as styles:
        data = json.load(styles)
    return data

if __name__ == '__main__':
    app.run(host= '202.182.112.252', port=80, debug=False)
