import React from 'react';
import './movieplaying.css';

function MoviePlaying() {
  return (
    <div>
      <div className='title'>
        <h1>Movie of the Day</h1>
      </div>

      <div className="movie-playing">
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zzH4rV08TLI?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MoviePlaying;
