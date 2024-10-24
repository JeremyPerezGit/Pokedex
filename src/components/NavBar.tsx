interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  const chosenPokemon = (index: number) => {
    setPokemonIndex(index);
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          onClick={() => chosenPokemon(index)}
          key={pokemon.name}
          type="button"
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
