import React from 'react'
import {Link} from 'react-router-dom'
import {StyledShowList} from "./ShowList.styled"

const ShowList = ({id, name, image, summary}) => {

    const summaryAsText = summary 
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No Description';

    return (
        <StyledShowList>
            <div>
                <img className= "img-wrapper" src = {image} alt = "show" />
            </div>
            <h1> {name} </h1>
            <p>{summaryAsText}</p>

            <div className="btns">
                <Link to = {`/show/${id}`}> Read More</Link>
                <button type = "button"> Add to Favourite</button>
            </div>
        </StyledShowList>
    )
}

export default ShowList
