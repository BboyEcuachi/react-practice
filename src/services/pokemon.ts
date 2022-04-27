import CommonService from './common';

const PokemonService =  { 
  getAll: async (params: string|object) => {
    const data = await CommonService.get('/pokemon', params);
    return data;
  },
  getPokemonData: async (name: string) => {
    const data = await CommonService.get('/pokemon/' + name, {});
    return data;
  },
  getPokemonSpecies: async (name: string) => {
    const data = await CommonService.get('/pokemon-species/' + name, {});
    return data;
  },
  getPokemonAbilities: async (name: string) => {
    const data = await CommonService.get('/ability/' + name, {});
    return data;
  }
}
  
export default PokemonService;
