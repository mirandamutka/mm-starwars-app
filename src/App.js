import logo from './logo.svg';
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
    console.log('setResults: ', results);
    // eslint-disable-next-line
  }, [loaded]);

  useEffect(() => {
    console.log('getting data')
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
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={() => setPage(page + 1)}>Next page</div>
        {page ===  1 ? null : <div onClick={() => setPage(prevPage)}>Previous page</div>}
        
        <p>{page}</p>
        {loaded ? (
          <div>
          <SearchComponent searchValue={searchString} setSearchValue={setSearchString} dataResult={results} />
            {searchString ? (null) : <CharacterComponent dataResult={results} loaded={loaded} />}
          </div>
        )
        : <p>loading...</p>}
    </div>
  );
}

export default App;
