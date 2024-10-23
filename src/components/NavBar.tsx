interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const previousPokemon = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const nextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={previousPokemon} type="button">
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon} type="button">
          Suivant
        </button>
      )}
    </div>
  );
}

export default NavBar;
