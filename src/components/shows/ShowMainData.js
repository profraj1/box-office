import React from 'react'
import IMAGE_NOT_FOUND from "../../images/imageNotFound.png";
import {Star} from "../Styled";
import { HeadLine, MainDataWrapper, TagList } from './ShowMainData.styled';

const ShowMainData = ({image, name, rating, summary, tags}) => {
    return (
        <MainDataWrapper>
            <img src = {image ? image.original : IMAGE_NOT_FOUND} alt = "show-cover" />
            <div className = "text-side">
                <HeadLine>
                    <h1> {name} </h1>
                    <div>
                        <Star />
                        <span>{rating.average || 'N/A'}</span>
                    </div>
                </HeadLine>
                <div className = "summary" dangerouslySetInnerHTML = {{__html : summary}}/>
            
                <div>
                    Tags : {' '}
                    <TagList>
                        {tags.map((tag, i) => (
                            <span key = {i}>{tag}</span>
                        ))}
                    </TagList>
                </div>
            </div>
            
        </MainDataWrapper>
    )
}

export default ShowMainData
