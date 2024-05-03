import React, { useState } from 'react';
import './trendCard.css';

function TrendCard({ slide }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleButtonClick = () => {
    setIsAdded(true);
  };

  return (
    <div className="trend-card">
      <img className="img-fluid" src={slide.previewImg} alt="Trend" />
      <button onClick={handleButtonClick} disabled={isAdded}>
        {isAdded ? 'Added' : 'Add to wishlist'}
        {isAdded ? null : <ion-icon name="add-outline"></ion-icon>}
      </button>
    </div>
  );
}

export default TrendCard;
