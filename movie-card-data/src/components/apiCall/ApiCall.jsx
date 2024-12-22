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
      <section className="container flex flex-col items-center mt-8">
        <header>
          <h1 className="text-3xl"> Let's Catch Pokémon</h1>
        </header>
        <ul className="mt-8 drop-shadow-sm border-2">
          <li className="flex flex-col items-center">
            <figure className="flex justify-center drop-shadow">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="w-3/5 h-60"
              />
            </figure>
            <h1 className="text-2xl uppercase mb-4">{pokemon.name}</h1>
            <div className="flex items-center gap-4 mb-4 px-4">
              <p className="text-lg">
                Height : <span> {pokemon.height} </span>
              </p>
              <p className="text-lg">
                Weight : <span> {pokemon.weight}</span>
              </p>
              <p className="text-lg">
                Speed : <span>{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};

export default ApiCall;
