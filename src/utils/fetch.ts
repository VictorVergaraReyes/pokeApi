const baseurl = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit: number) => {
  const response = await fetch(`${baseurl}/pokemon?limit=${limit}`);
  const data = await response.json();
  return data.results;
};

export const getPokemon = async (name: string) => {
  const response = await fetch(`${baseurl}/pokemon/${name}`);
  const data = await response.json();
  return data;
};
