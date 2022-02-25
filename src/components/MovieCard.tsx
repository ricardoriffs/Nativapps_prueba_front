import React, { useContext, useEffect } from "react";


import { Search } from '../interface/response';
import defaultImg from '../assets/default.jpg'
interface props {
  movie: Search;
}
export const MovieCard = ({ movie }: props) => {
  

  return (
    <>
      
        
          <div key={movie.imdbID} className="movieCard__box">
            <div className="movieCard__box-content">
              {
                movie.Poster === 'N/A' || movie.Poster === 'N/a' || movie.Poster === 'n/a' ? (
                  <img className="movieCard__content-img" src={defaultImg} alt="" />
                )
                : (
                  <img
                    className="movieCard__content-img"
                    src={movie.Poster}
                    alt="Imagen"
                  />

                )
              }

              <h3 className="movieCard__content-titulo"> {movie.Title} </h3>
              <p className="movieCard__content-text">{`Year: ${movie.Year}`}</p>
              <p className="movieCard__content-text">{`Type: ${movie.moviesType.movieType}`}</p>
            </div>
          </div>
      
      
    </>
  );
};
