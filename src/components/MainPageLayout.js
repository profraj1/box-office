import React from 'react';
import Navs from "./Nav"
import Title from './Title';

function MainPageLayout({children}) {
    return (
        <div>
            <Title title = "Box Office" subtitle = "Are you looking for a movie or an actor?"/>
            <Navs />

            {children}
        </div>
    )
}

export default MainPageLayout
