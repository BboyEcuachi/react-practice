import React, { useEffect, useState } from 'react';
import PokemonService from '../../services/pokemon';
import CardImage from '../card-image/card-image.component';
import PokemonStats from '../pokemon-stats/pokemon-stats.component';
import PokemonAbility from '../pokemon-ability/pokemon-ability.component';
import './card.component.scss';
import PokemonSizes from '../pokemon-sizes/pokemon-sizes.component';
import PokemonTypes from '../pokemon-types/pokemon-types.component';

interface PokemonData {
  color: string;
  photo: string;
  types: any[];
  height: number;
  weight: number;
  abilities: any[];
  stats: any[]
}

const Card = (props: any) => {
  const { pokemon } = props;  
  const [cardState, setCardState] = useState<PokemonData | null>(null);

  useEffect(() => {    
    const fetchData = async () => {
      const pokemonData = await PokemonService.getPokemonData(pokemon.name);
      const pokemonSpecies = await PokemonService.getPokemonSpecies(pokemon.name);

      setCardState({
        color: pokemonSpecies?.color?.name,
        photo: pokemonData?.sprites?.front_default, 
        types: pokemonData?.types, 
        height: pokemonData?.height, 
        weight: pokemonData?.weight, 
        abilities: pokemonData?.abilities, 
        stats: pokemonData?.stats?.map((i: any) => [i.stat.name, i.base_stat])
      })
    }
    
    fetchData();
  }, [pokemon.name]);
  
  if (!pokemon) return <p>No pokemon, sorry</p>;
  return (
    <>
      <div className={`card pokemon-${cardState?.color ?? ''}-type`}>
        <CardImage url={cardState?.photo} />
        <div className='card-body'>
          <h5 className='card-title'> { pokemon.name } </h5>
          <PokemonSizes height={cardState?.height} weight={cardState?.weight}/>
          <PokemonStats stats={cardState?.stats}/>
          <PokemonTypes types={cardState?.types}/>
        </div>
        <div className='card-footer'>
        {
          cardState?.abilities.map((a, i: number) => <PokemonAbility key={i} ability={a.ability.name} />)
        }
        </div>
      </div>
      <br/>
    </>
  );
};
export default Card;