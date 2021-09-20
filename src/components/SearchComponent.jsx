import { useState, useEffect } from "react";
import './SearchComponent.css';
import CharacterDetailComponent from "./CharacterDetailComponent";

const SearchComponent = ({searchValue, setSearchValue, dataResult}) => {

    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    let characterList = dataResult.results;

    useEffect(() => {
        if (searchValue !== '') {
            const result = characterList.filter(character =>
                character.name.toLowerCase().includes(searchValue)
            );
            setSearchResults(result);
            console.log('search result', searchResults)
        } else {
            setSearchResults([]);
        }
        // eslint-disable-next-line
    }, [searchValue]);
    
    return (
    <div className="Searchbar">
        <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        className="Searchbar-input"
        alt="searchbar"
        />
            {
            searchResults.map((character, key) => {
                return (
                    <div key={key}>
                        <CharacterDetailComponent character={character} />
                    </div>
                )
            })
            }
    </div>
    );
}

export default SearchComponent;