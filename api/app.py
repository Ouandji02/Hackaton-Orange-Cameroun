from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename
import sys
import os

from model.prediction import predict_image
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), 'model')))

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'Aucune image reçue'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'Nom de fichier vide'}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    try:
        prediction = predict_image(file_path)
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)