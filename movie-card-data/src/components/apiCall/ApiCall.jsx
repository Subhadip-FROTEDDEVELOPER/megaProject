import React, { useEffect, useState } from "react";

const ApiCall = () => {
  const [pokemon, setPokemon] = useState({});
  const API = "https://pokeapi.co/api/v2/pokemon/1";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => console.log(error));
  }, []);
  return (
    <>
      {pokemon.name && (
        <div key={pokemon.id}>
          <h1>{pokemon.name}</h1>
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
      )}
    </>
  );
};

export default ApiCall;
