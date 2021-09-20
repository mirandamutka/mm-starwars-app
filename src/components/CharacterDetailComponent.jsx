import { useState } from "react";
import './CharacterDetailComponent.css';
const CharacterDetailComponent = ({character}) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div onClick={() => setExpanded(!expanded)} className="CharacterDetail-container">
            <div className="CharacterDetail-content">
                <p className="CharacterDetail-title">{character.name}</p>
                {expanded ?
                (
                <div className="CharacterDetail-expanded">
                    <p>Height: {character.height}</p>
                    <p>Eye colour: {character.eye_color}</p>
                    <p>Hair colour: {character.hair_color}</p>
                </div>
                ) : null
                }
            </div>
        </div>
    )
}

export default CharacterDetailComponent;