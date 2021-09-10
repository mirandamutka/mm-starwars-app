import { useEffect, useState } from "react";
import '../App.css';

const CharacterComponent = ({dataResult, loaded}) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        setCharacters(dataResult[0].results);
    }, [dataResult])

    console.log('results: ', characters)

    return (
        characters.map((character, key) => {
            return (
                <p key={key}>{character.name}</p>
            )
        })
    )
}

export default CharacterComponent;