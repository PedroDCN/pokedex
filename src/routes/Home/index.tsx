import { useEffect, useState } from "react";
import axios from "axios";

const getApiURLbyPokemon = (id: string | number) =>
  `https://pokeapi.co/api/v2/pokemon/${id}/`;

export default function Home() {
  const [pokemons, setPokemons] = useState<any>({});

  const getPokemon = async (id: string | number) =>
    axios
      .get(getApiURLbyPokemon(id))
      .then((response) => response.data)
      .then((pokemon: any) =>
        setPokemons((CurrPokemons: any) => ({ ...CurrPokemons, [id]: pokemon }))
      );

  useEffect(() => {
    for (let i = 1; i <= 151; i++) {
      getPokemon(i);
    }
  }, []);

  return (
    <>
      <ul>
        {pokemons && Object.values(pokemons).length ? (
          Object.values(pokemons).map((pokemon: any) => (
            <li key={pokemon?.id}>
              <div>
                <img src={pokemon?.sprites?.front_default} alt='' />
              </div>
              <h3>
                {pokemon?.id}. {pokemon?.name}
              </h3>
              <div>
                <p>
                  {pokemon?.types
                    ?.map((item: any) => item.type.name)
                    .join(" | ")}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li>No pokemons.</li>
        )}
      </ul>
    </>
  );
}
