import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import MovieSwiper from '../components/MovieSwiper';
import PlayBtn from '../components/PlayBtn';


function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3001/api/data')
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = id => {
    const newMovies = movies.map(movie => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <div className="banner" data-aos="fade-up" data-aos-delay="100">
      {movies &&
        movies.length > 0 &&
        movies.map(movie => (
          <div key={movie._id} className="movie">
            <img
              src={movie.bgImg}
              alt=""
              className={`bgImg ${movie.active ? 'active' : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center">
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}
      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
