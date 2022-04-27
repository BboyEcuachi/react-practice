import React, { useEffect, useState } from 'react';
import PokemonService from '../../services/pokemon';
import './pokemon-ability.component.scss';

const PokemonAbility = (props: any) => {
  const { ability } = props;
  const [abilityState, setAbilityState] = useState({description: ''});

  useEffect(() => {    
    const fetchData = async () => {
      const AbilityData = await PokemonService.getPokemonAbilities(ability);

      setAbilityState({
        description: AbilityData.effect_entries[AbilityData.effect_entries.findIndex((i: any) => i.language.name === 'en')].effect
      })      
    }
    
    fetchData();
  }, [ability]);
  
  if (!ability) return <span> none </span>
  return <button className="btn-ability" data-bs-toggle="tooltip" data-bs-placement="top" title={abilityState.description}> {ability} </button>
};

export default PokemonAbility;