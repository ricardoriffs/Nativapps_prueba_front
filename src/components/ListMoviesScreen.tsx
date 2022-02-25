import React, { useContext, useEffect, useState } from "react";
import { SearchMovie } from "./SearchMovie";
import { MovieCard } from "./MovieCard";

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/moviesAction";
import { RootState } from "../store/store";
import { searchMoviesTypes } from "../actions/uiActions";

export const ListMoviesScreen = () => {
  const dispatch = useDispatch();

  const { firstTime } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    if (firstTime) {
      dispatch(searchMoviesTypes());
      console.log("se ejecuta endpoint de base de datos");
    }
  }, [firstTime, dispatch]);

  const { title, page2, type, year } = useSelector(
    (state: RootState) => state.filter
  );
  //useState page
  const [page, setPage] = useState(1);

  const { movies, totalPage } = useSelector((state: RootState) => state.movies);
  //Pagination
  const pageLimited = totalPage;
  const pageLimitedReal = pageLimited ? Math.ceil(pageLimited) : 1;

  //increment page
  const handleNextPage = () => {
    if (page < pageLimitedReal) {
      setPage((value) => value + 1);
    }
  };
  //decrement page
  const handlePreviewPage = () => {
    if (page > 1) {
      setPage((value) => value - 1);
    }
  };

  //Effects secondary get data
  useEffect(() => {
    dispatch(getMovies(title, year, type, page));
  }, [title, year, type, page, dispatch]);

  //Effects secondary set filter with page

  return (
    <>
      <h1 className="listMovies__title">List movies</h1>
      <SearchMovie />
      <hr />
      <section className="movieCard-container">
        {movies.map((movie: any, index: number) => (
          <MovieCard movie={movie} key={`${movie.imdbID}${index}`} />
        ))}
      </section>
      <div className="ListMovies__boxButton">
        <button
          onClick={handlePreviewPage}
          className="ListMovies__button"
          disabled={page <= 1}
        >
          Preview page
        </button>
        <button onClick={handleNextPage} className="ListMovies__button">
          {" "}
          Next page{" "}
        </button>
      </div>
    </>
  );
};
