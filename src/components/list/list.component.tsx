import React from 'react';
import Card from '../card/card.component';

const List = (props: any) => {
  const { pokemons, filter } = props;
  if (!pokemons || pokemons.length === 0) return <p>No repos, sorry</p>;
  
  let filteredPokemons = pokemons.results;
  if (filter) filteredPokemons = filteredPokemons.filter((p: any) => p.name.toLowerCase().includes(filter.toLowerCase()))
  
  if (!filteredPokemons || filteredPokemons.length === 0) return <p>No repos, sorry</p>;
  return (
    <div className='grid'>
      <div className='row'>
      {filteredPokemons.map((poke:any, i: number) => {
        return (
          <div className='col-6 col-md-4 col-lg-3 col-xl-2' key={i}>
            <Card pokemon={poke}/>
          </div>
        );
      })}
      </div>
    </div>
  );
};
export default List;