import React, { useEffect, useState } from "react";

const ApiCall = () => {
  const [pokemon, setPokemon] = useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => console.log(error));
  }, []);
  console.log(pokemon);
  return (
    <section className="container">
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              {/* speed: <span>{pokemon.stats[5].base_stat}</span> */}
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ApiCall;