import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const getApiURLbyPokemon = (id: string | number) =>
  `https://pokeapi.co/api/v2/pokemon/${id}/`;

const pokemonContext = createContext({ pokemons: {} } as any);

export function PokemonProvider({ children }: any) {
  const [pokemons, setPokemons] = useState<any>({});

  useEffect(() => {
    const getPokemon = async (id: string | number) =>
      axios
        .get(getApiURLbyPokemon(id))
        .then((response) => response.data)
        .then((pokemon: any) =>
          setPokemons((CurrPokemons: any) => ({
            ...CurrPokemons,
            [id]: pokemon,
          }))
        );

    for (let i = 1; i <= 151; i++) {
      getPokemon(i);
    }
  }, []);

  return (
    <pokemonContext.Provider value={{ pokemons }}>
      {children}
    </pokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(pokemonContext);
}
