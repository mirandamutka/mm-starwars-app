import logo from './images/starWarsLogo.png';
import './App.css';
import GetData from './components/GetData';
import CharacterComponent from './components/CharacterComponent';
import { useEffect, useState } from "react";
import SearchComponent from './components/SearchComponent';

function App() {

  const [loaded, setLoaded] = useState(0);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    setLoaded(0)
    GetData(loaded, setLoaded, page, results, setResults)
    // eslint-disable-next-line
  }, [page])

  function prevPage() {
    if (page > 1) {
      setPage(page - 1)
    } else {
      setPage(1)
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Character Roster</p>
      </div>
        {loaded ? (
          <div className="Searchbar">
          <SearchComponent searchValue={searchString} setSearchValue={setSearchString} dataResult={results} />
            {searchString ? (null) : <CharacterComponent dataResult={results} loaded={loaded} />}
          </div>
        )
        : <p>loading...</p>}
        <div className="App-pagination">
          {page ===  1 ? null : <div className="App-pagination-border" onClick={() => setPage(prevPage)}>←</div>}
          <p className="App-pagination-border">{page}</p>
          {results.next ? <div className="App-pagination-border" onClick={() => setPage(page + 1)}>→</div> : null}
        </div>
    </div>
  );
}

export default App;
