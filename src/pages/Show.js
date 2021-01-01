/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, {useEffect, useReducer} from 'react';
import { useParams } from 'react-router-dom';
import ShowCast from '../components/shows/ShowCast';
import ShowDetails from '../components/shows/ShowDetails';
import ShowMainData from '../components/shows/ShowMainData';
import ShowSeasons from '../components/shows/ShowSeasons';
import {getApi} from "../misc/Config";
import { InfoBlock, ShowPageWrapper } from './Show.styled';


// http://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast
const initialState = {
    show : null,
    isLoading : true,
    error: null
}

const reducer = (prevState, action) => {
    switch(action.type){

        case 'FETCH_SUCCESS': {
            return {isLoading:false, show : action.show, error:null};
        }
        case 'FETCH_FAILED': {
            return {...prevState, isLoading : false, error : action.error};
        }

        default: return prevState;
    }
};

const Show = () => {
    const { showId } = useParams();
    const [{show, isLoading, error}, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {

        let isMounted = true;

        getApi(`shows/${showId}?embed[]=seasons&embed[]=cast`).then(results => {
            setTimeout(() => {
                if(isMounted){
                    dispatch({type : 'FETCH_SUCCESS', show: results})
                }
                
            }, 2000);
            
        }).catch(err => {
            if(isMounted){
                dispatch({type : 'FETCH_FAILED' , show : err.message})
            }
            
        });

        return () => {
            isMounted = false;
        };

    }, [showId]);

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
