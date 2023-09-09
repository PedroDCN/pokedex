import { usePokemon } from "../../contexts/PokemonContext";

import "./style.css";

export default function Home() {
  const { pokemons } = usePokemon();

  return (
    <main>
      <div className='container'>
        <h1>Pokedéx</h1>
        <ul className='pokemons-list'>
          {pokemons && Object.values(pokemons).length ? (
            Object.values(pokemons).map((pokemon: any) => (
              <li
                key={pokemon?.id}
                className={`pokemon-card ${pokemon.types[0].type.name}`}
              >
                <div className='card-image-container'>
                  <img
                    className='card-image'
                    src={pokemon?.sprites?.front_default}
                    alt={pokemon.name}
                  />
                </div>
                <h3>
                  {pokemon?.id}. {pokemon?.name}
                </h3>
                <div>
                  <p className='card-type'>
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
      </div>
    </main>
  );
}
