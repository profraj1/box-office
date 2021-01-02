import { useReducer, useEffect, useState} from "react";
import { getApi } from "./Config";


function showReducer(prevState, action){
    switch(action.type){

        case 'ADD' : {
            return [...prevState, action.showId];
        }

        case 'REMOVE': {
            return prevState.filter(showId => showId !== action.showId);
        }

        default: return prevState;
    }
}

function usePresistedReducer(reducer, initialState, key){

    const [ state, dispatch] = useReducer(reducer, initialState, (initial) => {
        const presisted = localStorage.getItem(key);

        return presisted ? JSON.parse(presisted): initial;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return ( [state, dispatch]);
}

export function useShows(key = 'shows') {
    return usePresistedReducer(showReducer, [], key);
}


export function useLastQuery(key = 'lastQuery'){

    const [input, setInput] = useState( () => {
        const presisted = sessionStorage.getItem(key);

        return presisted ? JSON.parse(presisted): "";
    });

    const setPresistedInput = (newState) => {
        setInput(newState);
        sessionStorage.setItem(key, JSON.stringify(newState));
    }


    return [input, setPresistedInput];
}

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
export function useShow(showId){
    const [state, dispatch] = useReducer(reducer, initialState);

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

    return state;
}