import React from "react";

const MovieCard = ({ movie: { Title, Poster, Year, Type } }) => {
  const yearColor = Year >= 2000 ? "bg-orange-500" : "bg-blue-500";
  return (
    <li className="grid gap-2 w-80 border-gray-600	rounded-lg border-2">
      <div>
        <img className="w-full h-60 rounded-tl-lg rounded-tr-lg" src={Poster} alt="" />
      </div>
      <div className="flex flex-col gap-3 p-3">
        <h2 className="font-bold	">Title : {Title}</h2>
        <h2>
          Year :
          <span className={`ml-2 rounded-xl px-2 text-white ${yearColor}`}>
            {Year}
          </span>
        </h2>
        <h2>Type : {Type}</h2>
      </div>
    </li>
  );
};

export default MovieCard;
