const baseurl = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (offset: number, limit: number) => {
  const response = await fetch(
    `${baseurl}/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();
  return data.results;
};

export const getPokemonDetails = async (name: string | number) => {
  const response = await fetch(`${baseurl}/pokemon/${name}`);
  const data = await response.json();
  return data;
};
