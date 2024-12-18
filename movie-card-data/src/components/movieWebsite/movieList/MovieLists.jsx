import React from "react";
import movies from "../movie.js";
import { MovieCard } from "../index.js";

const MovieLists = ({ backgroundColorCheck, textColorCheck }) => {
  return (
    <section
      className={`flex justify-evenly items-center ${backgroundColorCheck} ${textColorCheck} duration-200`}
    >
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 my-24">
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default MovieLists;
