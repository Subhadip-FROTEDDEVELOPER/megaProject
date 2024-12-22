import React, { useEffect, useState } from "react";

const ApiCall = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  //useEffect(() => {
  //fetch(API)
  // .then((res) => res.json())
  //  .then((data) => {
  //    setPokemon(data);
  //  })
  //  .catch((error) => console.log(error));
  // }, []);
  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  if (loading) {
    return <h1>Loading ....</h1>;
  }
  if (error) {
    return <h1>Error:{error.message}</h1>;
  }
  if (pokemon) {
    return (
      <section className="container">
        <header>
          <h1> Let's Catch Pokémon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon.sprites.front_default}
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
                Speed: <span>{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};

export default ApiCall;
