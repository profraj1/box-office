import React from 'react'


const ActorList = ({id, name, image, country, birthday, deathday, gender}) => {
    return (
        <div>
            <div>
                <img src = {image} alt = "people"/>
            </div>
            <h1>{name} {gender ? `(${gender})` : null}</h1>
            <p>{country ? `Comes from ${country}` : 'No Country known'}</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
        </div>
    )
}

export default ActorList
