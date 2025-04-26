from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

# Chargement du modèle
model = load_model("model/model.h5")

# Fonction de prédiction
def predict_image(img_path):
    img = image.load_img(img_path, target_size=(32, 32))  # adapte à ta taille
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # normalisation si nécessaire

    prediction = model.predict(img_array)
    predicted_class_idx = np.argmax(prediction, axis=1)[0]
    class_names = ['AI', 'Human']
    print("Je suis arrive")

# Génération des réponses
    predicted_class_name = class_names[predicted_class_idx]
    print(prediction[0][predicted_class_idx])
    confidence = float(prediction[0][predicted_class_idx] * 100)
    print("Je suis arrive2")
        # Détails de toutes les probabilités
    prediction_data = {
            "predicted_class": predicted_class_name,
            "confidence": confidence,
    }
    return prediction_data