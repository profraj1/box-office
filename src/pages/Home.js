/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';

import {getApi} from "../misc/Config"
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';
import CustomRadio from '../components/CustomRadio';

function Home() {
    // eslint-disable-next-line no-unused-vars
    const [input, setInput] = useLastQuery();
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
            <SearchInput type = "text" placeholder = "Search for something" onChange = {onInputChange} onKeyDown = {onInputKeyDown} value= {input}/>

            <RadioInputsWrapper>
                <div>
                    <CustomRadio label = "Shows" id = "shows-btn" value = "shows" onChange = {rdBtnOnChange} checked = {isSearchShow}/>
                </div>
                <div>
                    <CustomRadio label = "Actors" id = "people-btn" value = "people" onChange = {rdBtnOnChange} checked = {!isSearchShow}/>
                </div>

            </RadioInputsWrapper>

            <SearchButtonWrapper>
                <button type = "button" onClick = {onSearchBtnClick}>Search</button>
            </SearchButtonWrapper>
            {renderResults()}
            
        </MainPageLayout>
    );
}

export default Home
