/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';

import {getApi} from "../misc/Config"

function Home() {
    // eslint-disable-next-line no-unused-vars
    const [input, setInput] = useState('');
    const [apiResult, setApiResult] = useState(null);
    const [rdBtnInput, setRdBtnInput] = useState('shows');

    const onInputChange = (ev) => {
        setInput(ev.target.value);
    };

    const onSearchBtnClick = () => {

        getApi(`search/${rdBtnInput}?q=${input}`).then((response) => {
            setApiResult(response);
        })
        
        
    };

    const onInputKeyDown = (ev) => {
        if(ev.keyCode === 13){
            onSearchBtnClick();
        }
    }

    const renderResults = () => {
        if(apiResult && apiResult.length === 0){
            return (<div>No Results Found</div>);
        }

        if(apiResult && apiResult.length > 0){
            return apiResult[0].show  ? <ShowGrid data = {apiResult}/> : <ActorGrid data = {apiResult}/>;
        }

        return null;
    }

    const rdBtnOnChange = (ev) => {
        setRdBtnInput(ev.target.value);
    }

    const isSearchShow = rdBtnInput === "shows";



    return (
        <MainPageLayout>
            <input type = "text" placeholder = "Search for something" onChange = {onInputChange} onKeyDown = {onInputKeyDown} value= {input}/>

            <div>
                <label htmlFor = "shows-btn" >
                    Shows
                    <input id = "shows-btn" type= "radio" value = "shows" onChange = {rdBtnOnChange} checked = {isSearchShow}/>
                </label>
                <label htmlFor = "people-btn" >
                    Actors
                    <input id = "people-btn" type= "radio" value = "people" onChange = {rdBtnOnChange} checked = {!isSearchShow}/>
                </label>
            </div>

            <button type = "button" onClick = {onSearchBtnClick}>Search</button>

            {renderResults()}
            
        </MainPageLayout>
    );
}

export default Home
