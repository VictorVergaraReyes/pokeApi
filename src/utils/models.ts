export interface Pokemon {
  name: string;
  id: number;
  image?: string;
  types?: PokemonTypeProp[];
  hp?: number;
  attack?: number;
  defense?: number;
}

export type PokemonTypeProp = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export interface PokemonColors {
  fire: string;
  water: string;
  grass: string;
  electric: string;
  poison: string;
  normal: string;
  flying: string;
  bug: string;
  psychic: string;
  ground: string;
  rock: string;
  fighting: string;
  ghost: string;
  ice: string;
  dragon: string;
  dark: string;
  steel: string;
  fairy: string;
}
export type PokemonType =
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'poison'
  | 'normal'
  | 'flying'
  | 'bug'
  | 'psychic'
  | 'ground'
  | 'rock'
  | 'fighting'
  | 'ghost'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export const pokemonTypes = [
  'fire',
  'water',
  'grass',
  'electric',
  'poison',
  'normal',
  'flying',
  'bug',
  'psychic',
  'ground',
  'rock',
  'fighting',
  'ghost',
  'ice',
  'dragon',
  'dark',
  'steel',
  'fairy',
] as const;
