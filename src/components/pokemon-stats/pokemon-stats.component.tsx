import React from 'react';
import './pokemon-stats.component.scss';

const PokemonStats = (props: any) => {
  const { stats } = props;

  if (!stats) return null;
  return (
    <div className='row m-0'>
      {
        stats.map(
          (s: any, i: number) => <div className='col-6 poke-stats' key={i}>
            <small>
              { s[0] }: { s[1] }
            </small>
          </div>
        )
      }
    </div>
  )
};
export default PokemonStats;