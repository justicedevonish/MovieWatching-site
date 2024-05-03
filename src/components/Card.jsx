import React from 'react';
import './card.css';

function Card({ movie }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="moive-card">
        <img className="img-fluid" src={movie.previewImg} alt="" />
        <p>
          {movie.length} | {movie.category}
        </p>
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="card-icons">
            <ion-icon name="add-outline"></ion-icon>
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
