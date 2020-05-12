import { filterByType, sortOrder } from '../src/data.js';

const pokemonMock = [{
  id: 1,
  name: "Bulbasaur",
  type: ["Grass", "Poison"],
  },
  {
  id: 4,
  name: "Charmander",
  type: ["Fire"],
  }
];

describe('Deve filtrar o pokémon por tipo', () => {
  it('é uma função', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('retorna o objeto do pokémon quando filtrado por tipo', () => {
    expect(filterByType("Grass", "type", pokemonMock)).toEqual([{"id": 1, "name": "Bulbasaur", "type": ["Grass", "Poison"]}]);
  });
});


describe('Deve ordernar os pokémons de A-Z e Z-A ou 1-151 a 151-1', () => {
  it('é uma função', () => {
    expect(typeof sortOrder).toBe('function');
  });

  it('retorna uma lista de pokémons ordenados de a-z', () => {
    const firstPosition = sortOrder("az", "name", pokemonMock)[0];
    expect(firstPosition.name).toBe("Bulbasaur");
  });
  
  it('retorna uma lista de pokémons ordenados de z-a', () => {
    const firstPosition = sortOrder("za", "name", pokemonMock)[0];
    expect(firstPosition.name).toBe("Charmander");
  });

  it('retorna uma lista de pokémons ordenados de 1-151', () => {
    const firstPosition = sortOrder("cresc", "id", pokemonMock)[0];
    expect(firstPosition.id).toBe(1);
  });
  
  it('retorna uma lista de pokémons ordenados de 151-1', () => {
    const firstPosition = sortOrder("decre", "id", pokemonMock)[0];
    expect(firstPosition.id).toBe(4);
  });
});

/*
describe('Deve buscar os pokémons pelo nome', () => {
  it('é uma função', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  
  it('retorna o pokémon pelo nome buscado', () => {
    expect(searchPokemon("Bulbasaur", "name", pokemonMock)).toEqual([{"id": 1, "name": "Bulbasaur", "type": ["Grass", "Poison"]}]);
  });
});
*/
