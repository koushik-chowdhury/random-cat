import { useState } from "react";
import { useCat } from "../hooks/useCat";
import Loader from "./Loader";
import "../styles/cat.css";

const CatViewer = () => {
  const { cat, loading, error, loadCat } = useCat();
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const handleImageLoadStart = () => {
    setImageLoading(true);
    setImageError(false);
  };

  return (
    <div className="cat-container">
      <h2>Random Cat Viewer</h2>

      {loading && <Loader />}
      {error && <p className="error-message">😿 {error}</p>}

      {cat && !loading && (
        <div className="cat-content">
          <div className="cat-main">
            <div className="cat-image-container">
              <img
                src={cat.image}
                alt={cat.name}
                className={`cat-image ${imageLoading ? 'loading' : ''} ${imageError ? 'error' : ''}`}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
                onLoadStart={handleImageLoadStart}
              />
            </div>
            <div className="cat-details">
              <h3>{cat.name}</h3>
              <p className="cat-description">{cat.description}</p>
              <div className="cat-stats">
                <div className="stat-item">
                  <div className="stat-label">Origin</div>
                  <div className="stat-value">{cat.origin}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Life Span</div>
                  <div className="stat-value">{cat.life_span} years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Temperament</div>
                  <div className="stat-value">{cat.temperament}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Weight</div>
                  <div className="stat-value">{cat.weight?.metric || 'N/A'}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cat-actions">
            <button onClick={loadCat} disabled={loading}>
              {loading ? 'Finding your cat...' : 'Get New Cat 🐾'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatViewer;