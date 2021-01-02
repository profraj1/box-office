import React from 'react'
import ShowList from './ShowList'
import DEFAULT_IMG from '../../images/imageNotFound.png'
import { FlexGrid } from '../Styled'
import { useShows} from "../../misc/custom-hooks"



const ShowGrid = ({ data }) => {
    const [ starredShows, dispatchStarred] = useShows();
    return (
        <FlexGrid>
            {
                data.map(({show}) => { 
                    const isStarred = starredShows.includes(show.id);
                    const onStarClick = () => {
                        if(isStarred){
                            dispatchStarred({type : 'REMOVE', showId : show.id});
                        }else{
                            dispatchStarred({type : 'ADD', showId : show.id});
                        }
                    };
                    
                    return (<ShowList  key = {show.id} 
                        id = {show.id} 
                        name = {show.name} 
                        image = {show.image ? show.image.medium : DEFAULT_IMG} 
                        summary = {show.summary}
                        onStarClick = {onStarClick}
                        isStarred = {isStarred}/>)
                })
            }
        </FlexGrid>
    )
}

export default ShowGrid
