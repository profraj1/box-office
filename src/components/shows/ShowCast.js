import React from 'react';
import IMAGE_NOT_FOUND from "../../images/imageNotFound.png";
import { CastWrapper } from './ShowCast.styled';

function ShowCast({cast}) {
    return (
        <CastWrapper>
            {cast.map(({ person, character, voice }, key) => (
                <div key={key} className = "cast-item">
                <div className = "pic-wrapper">
                    <img src={person.image ? person.image.medium : IMAGE_NOT_FOUND}  alt="cast-person" />
                </div>
                <div className = "actor">
                    <span className = "bold">
                    {person.name} | {character.name} {voice ? '| Voice' : ''}
                    </span>
                </div>
                </div>
            ))}
        </CastWrapper>
    )
}

export default ShowCast
