import React from 'react';
import './pokemon-sizes.component.scss';

const PokemonSizes = (props: any) => {
  const { height, weight } = props;

  if (!height || !weight) return null;
  return (
    <div className='sizes-float'>
      <span> height: { height/10 }m </span>
      <br />
      <span> weight: { weight/10 }kg </span>
    </div>
  )
};
export default PokemonSizes;