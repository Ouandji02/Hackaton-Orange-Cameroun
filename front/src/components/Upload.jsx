import React, { useState } from 'react';
import axios from 'axios';


function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log('Fichier sélectionné:', event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', selectedFile);

      axios.post("https://6cda-102-244-200-98.ngrok-free.app/predict", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          console.log('Image envoyée avec succès :', response.data);
          setResult(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi de l\'image :', error);
          setResult({ error: "Une erreur est survenue lors de l'envoi." });
          setLoading(false);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 pt-5">Envoyer une Image</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="mb-4">
            <div
              className="mb-3"
              style={{
                width: '100%',
                height: '300px', // Augmentation de la hauteur de la zone d'upload
                backgroundColor: '#f8f9fa',
                border: '2px dashed #ced4da',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
              }}
              onClick={() => document.getElementById('fileInput').click()}
            >
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Aperçu"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // 'contain' pour conserver la qualité et afficher l'image entière
                    borderRadius: '10px',
                  }}
                />
              ) : (
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16" style={{ color: '#6c757d' }}>
                    <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2.37 5.165 5.343a3 3 0 0 1-2.374 2.748H9a1 1 0 0 1 0-2h3.13a3.168 3.168 0 0 0-.94-2.06C12.89 2.27 10.47 0 8 0a5.53 5.53 0 0 0-4.406 1.342zm-1.279 3.214a2.5 2.5 0 0 0-2.904 1.23l.926.926a1 1 0 0 1 .636.293h.001a1 1 0 0 1 .707.707v1h-2a1 1 0 0 1-1-1v-2c0-.552.23-1.042.617-1.402a.5.5 0 0 1 .708-.707zM14.5 6.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H2v6h12V7.5a.5.5 0 0 1 .5-.5h1.5z" />
                    <path fillRule="evenodd" d="M13.5 4.5a.5.5 0 0 1 .5.5v4.5h-2a.5.5 0 0 1-.354-.146l-.853-.854a.5.5 0 0 0-.707 0l-.854.854A.5.5 0 0 1 6 4.5H11.5a.5.5 0 0 1 0 1H6v-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <p className="mt-2 text-muted">Glissez-déposez ou cliquez pour sélectionner une image</p>
                </div>
              )}
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit" style={{ padding: '10px 20px' }}>
                Analyser l'image
              </button>
            </div>
          </form>
        </div>
      </div>

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      )}

      {result && !loading && (
        <div className="alert alert-info mt-4" style={{ padding: '15px' }}>
          <h5>Résultat :</h5>
          --- <div>Confiance : {result.prediction.confidence}%</div>
          --- <div>Verdit: {result.prediction.predicted_class.includes("AI") ? "Cet oeuvre a été générée par une IA" : "Cet oeuvre a été générée par un Humain"}</div>
          --- <div>Carte thermique : </div>
          {result.prediction.gradcam_heatmap ? <img src={`data:image/png;base64,${result.prediction.gradcam_heatmap}`} alt="Exemple Image" /> : undefined}
        </div>
      )}
    </div>
  );
}

export default Upload;