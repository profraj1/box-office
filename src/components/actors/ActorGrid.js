import React from 'react'
import ActorList from './ActorList'
import DEFAULT_IMG from '../../images/imageNotFound.png'

const Actor = ({ data }) => {
    return (
        <div>
        {
            data.map(({person}) => { 
            return (<ActorList  key = {person.id} 
                id = {person.id} 
                name = {person.name} 
                image = {person.image ? person.image.medium : DEFAULT_IMG} 
                country = {person.country ? person.country.name : null}
                birthday = {person.birthday}
                deathday = {person.deathday}
                gender = {person.gender}/>)
            })
        }
    </div>
    )
}

export default Actor
