/* eslint-disable no-unused-vars */
import React from 'react'
import {StyledActorList} from "./ActorList.styled"

const ActorList = ({id, name, image, country, birthday, deathday, gender}) => {
    return (
        <StyledActorList>
            <div>
                <img className= "img-wrapper" src = {image} alt = "people"/>
            </div>
            <h1>{name} {gender ? `(${gender})` : null}</h1>
            <p>{country ? `Comes from ${country}` : 'No Country known'}</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p className = "deathday">{deathday ? `Died ${deathday}` : "Alive"}</p>
        </StyledActorList>
    )
}

export default ActorList
