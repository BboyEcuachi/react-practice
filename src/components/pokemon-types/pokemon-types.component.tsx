import React from 'react';
import './pokemon-types.component.scss';

const PokemonTypes = (props: any) => {
  const { types } = props;

  if (!types) return null;
  return (
    <div className='types-float'>
      { types.map((i: any, j: number) => <button className={`btn-type ${i?.type.name ?? ''}-type`} key={j}>
        { i.type.name } 
        </button> ) }
    </div>
  )
};
export default PokemonTypes;