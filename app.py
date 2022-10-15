from flask import Flask, render_template, request
from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
from werkzeug import secure_filename
import os
import numpy as np
import struct
import matplotlib.pyplot as plt
import math
import wave
from scipy.misc import electrocardiogram

app = Flask(__name__)
app.config['SECRET_KEY'] = 'supersecret'
app.config['UPLOAD_FOLDER'] = 'static/files'


class UploadFileForm(FlaskForm):
    file = FileField("File")
    submit = SubmitField("Upload File")

@app.route('/', methods=['GET',"POST"])
@app.route('/index/', methods=['GET',"POST"])
def home():
    form = UploadFileForm()
    return render_template('index.html', form=form)

if __name__ =="__main__":
    app.run(debug=True)