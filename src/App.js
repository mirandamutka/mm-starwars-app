import logo from './logo.svg';
import './App.css';
import GetData from './components/GetData';
import CharacterComponent from './components/CharacterComponent';
import { useEffect, useState } from "react";

function App() {

  const [loaded, setLoaded] = useState(0);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  let localStorageData = localStorage.getItem('people');

  useEffect(() => {
    setResults([...results, JSON.parse(localStorageData)]);
    console.log('setResults: ', results);
}, [loaded]);

useEffect(() => {
  GetData(loaded, setLoaded, page)
}, [page])

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={() => GetData(() => loaded, setLoaded(loaded + 1), page)}>Get data</div>
        <div onClick={() => setPage(page + 1)}>Next page</div>
        <p>{page}</p>
        {loaded ? <CharacterComponent dataResult={results} loaded={loaded} /> : null}
    </div>
  );
}

export default App;
