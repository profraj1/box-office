/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';

import {getApi} from "../misc/Config"

function Home() {
    // eslint-disable-next-line no-unused-vars
    const [input, setInput] = useState('');
    const [apiResult, setApiResult] = useState(null);

    const onInputChange = (ev) => {
        setInput(ev.target.value);
    };

    const onSearchBtnClick = () => {

        getApi(`search/shows?q=${input}`).then((response) => {
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
            return (<div>
                {apiResult.map((item) => <div key = {item.show.id}> {item.show.name}</div>
                )}
            </div>);
        }

        return null;
    }

    return (
        <MainPageLayout>
            <input type = "text" onChange = {onInputChange} onKeyDown = {onInputKeyDown} value= {input}/>
            <button type = "button" onClick = {onSearchBtnClick}>Search</button>

            {renderResults()}
            
        </MainPageLayout>
    );
}

export default Home
