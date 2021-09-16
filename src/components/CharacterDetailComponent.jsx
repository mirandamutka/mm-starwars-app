import { useState } from "react";

const CharacterDetailComponent = ({character}) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div onClick={() => setExpanded(!expanded)}>
            <p>{character.name}</p>
            {expanded ?
            (
            <div>
                <p>Height: {character.height}</p>
                <p>Eye colour: {character.eye_color}</p>
                <p>Hair colour: {character.hair_color}</p>
            </div>
            ) : null
            }
            
        </div>
    )
}

export default CharacterDetailComponent;