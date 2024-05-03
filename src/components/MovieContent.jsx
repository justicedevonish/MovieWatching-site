import React from 'react';
import './movieContent.css';
import Button from './Button';

function MovieContent({ movie }) {
  const handleClick = () => {
    window.open('https://sflix.to/watch-movie/free-avengers-endgame-hd-19722.5376856', '_blank');
  };

  return (
    <div className={`content ${movie.active ? 'active' : undefined}`} onClick={handleClick}>
      <img className="movie-title" src={movie.titleImg} alt={movie.title} />
      <h4>
        <b>
        <span>{movie.year}</span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
        </b>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <Button
          icon={<ion-icon name="play-outline"></ion-icon>}
          name="Watch Now"
          color="#ffffff"
          bgColor="#000dff"
        />
      </div>
    </div>
  );
}

export default MovieContent;
