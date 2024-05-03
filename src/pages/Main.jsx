import React from 'react';
import './main.css';
import Schedule from './Schedule';
import Trend from './Trend';
import Rating from './Rating';
import MoviePlaying from './MoviePlaying';

function Main() {
  return (
    <main>
      <MoviePlaying />
      <Schedule />
      <Trend />
      <Rating/>
    </main>
  );
}

export default Main;
