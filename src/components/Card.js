import React from "react";
import { useState } from "react";

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
    >
      {!isShown && (
        <video className="video" controls>
          <source src={movie.thumbnail} type="video/mp4"></source>
        </video>
      )}

      {isShown && (
        <>
          <video className="video" controls autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4"></source>
          </video>
          <div className="info-box">
            <p className="movie-title">{movie.title}</p>
            <p className="movie-desc">{movie.synopsis}</p>
            <p className="movie-duration">{movie.duration}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
