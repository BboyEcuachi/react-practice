import React, { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import './App.scss';
import PokemonService from './services/pokemon';
import List from './components/list/list.component';

function App() {
  const [appState, setAppState] = useState<any>({ pokemons: null });
  const [searchField, setSearchField] = useState("");

  const handleChange = (e: any) => {
    setSearchField(e.target.value);
  };

  const next = async () => {
    const paramsNext = appState.pokemons.next.split('?')[1];    
    const pokemons = await PokemonService.getAll('?' + paramsNext);
    setAppState({ pokemons });  
  };

  const previous = async () => {    
    const paramsPrevious = appState.pokemons.previous.split('?')[1];    
    const pokemons = await PokemonService.getAll('?' + paramsPrevious);
    setAppState({ pokemons });  
  };

  useEffect(() => {
    setAppState({ pokemons: [] });

    const fetchData = async () => {
      const pokemons = await PokemonService.getAll({ limit: 20, offset: 0 });
      setAppState({ pokemons });
    }
    fetchData();
  }, [setAppState]);

  return (
    <div className="App">
      <header className="App-header">  
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand nav-title houm-palette silver-pink" href="/">
              <img className="d-inline-block align-text-top" src={logo}  width="36" alt="error-img" />
              &nbsp; Poke Search
            </a>
            <form className="d-flex">
              <input className="form-control m-1" type="search" placeholder="Charmander" aria-label="Search" onChange = {handleChange}/>
              <button className="btn search-button" type="button"> Search </button>
            </form>
          </div>
        </nav>
      </header>
      <body>
        <div className="container-fluid">
          <List pokemons={appState.pokemons} filter={searchField} />
        </div>
      </body>
      <footer>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" disabled={!appState?.pokemons?.previous} onClick={previous}> Previous </button>
          </li>
          <li className="page-item">
            <button className="page-link" disabled={!appState?.pokemons?.next} onClick={next}> Next </button>
          </li>
        </ul>
      </nav>
      </footer>
    </div>
  );
}

export default App;
