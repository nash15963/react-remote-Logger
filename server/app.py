#!/usr/bin/env python
import json
from flask import Flask
from flask_cors import CORS
import os
from flask import jsonify, request
from io import StringIO
import flask_cors
import time

app = Flask(__name__)
CORS(app)



@app.route('/api/test')
def index():
    return jsonify("Got the api and pass CORS")


@app.route('/api/logs', methods=['GET', 'POST'])
def read_logs():
    if request.method == 'POST': 
        print('loading')
        data = request.get_json()
        return jsonify('i got the para',data)




if __name__ == '__main__':
    app.debug = True
    app.run(port=5000)