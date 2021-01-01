import React from 'react'
import ShowList from './ShowList'
import DEFAULT_IMG from '../../images/imageNotFound.png'
import { FlexGrid } from '../Styled'



const ShowGrid = ({ data }) => {

    return (
        <FlexGrid>
            {
                data.map(({show}) => { 
                return (<ShowList  key = {show.id} 
                    id = {show.id} 
                    name = {show.name} 
                    image = {show.image ? show.image.medium : DEFAULT_IMG} 
                    summary = {show.summary}/>)
                })
            }
        </FlexGrid>
    )
}

export default ShowGrid
