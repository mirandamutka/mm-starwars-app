import { useEffect, useState } from "react";
import '../App.css';
import CharacterDetailComponent from "./CharacterDetailComponent";

const CharacterComponent = ({dataResult, loaded}) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        setCharacters(dataResult.results);
        // eslint-disable-next-line
    }, [loaded]);

    return (
        characters.map((character, key) => {
            return (
                <div key={key}>
                    <CharacterDetailComponent character={character} />
                </div>
            )
        })
    )
}

export default CharacterComponent;