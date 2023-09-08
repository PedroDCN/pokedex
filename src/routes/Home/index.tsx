import { usePokemon } from "../../contexts/PokemonContext";

export default function Home() {
  const { pokemons } = usePokemon();

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
