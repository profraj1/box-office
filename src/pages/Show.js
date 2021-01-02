/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import ShowCast from '../components/shows/ShowCast';
import ShowDetails from '../components/shows/ShowDetails';
import ShowMainData from '../components/shows/ShowMainData';
import ShowSeasons from '../components/shows/ShowSeasons';
import {getApi} from "../misc/Config";
import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';


const Show = () => {
    const { showId } = useParams();
    const {show, isLoading, error} = useShow(showId);


    if(isLoading){
        return ( <div> Data is beign Loaded. </div>
        )
    }

    if(error){
        return ( <div> Oops! Error Occured. </div>
        )
    }

    return (
        <ShowPageWrapper>
            <ShowMainData image = {show.image} name = {show.name} rating = {show.rating} summary = {show.summary} tags = {show.genres}/>

            <InfoBlock>
                <h2> Details</h2>
                <ShowDetails status = {show.status} network = {show.network} premiered = {show.premiered}/>
            </InfoBlock>

            <InfoBlock>
                <h2> Seasons</h2>
                <ShowSeasons seasons = {show._embedded.seasons}/>
            </InfoBlock>

            <InfoBlock>
                <h2> Cast</h2>
                <ShowCast cast = {show._embedded.cast}/>
            </InfoBlock>

        </ShowPageWrapper>
    )
}

export default Show
