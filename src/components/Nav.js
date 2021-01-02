import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, NavList } from './Nav.styled';

const LINKS = [
    {to : "/" , name: "Home"},
    {to : "/starred", name :"Starred"}
]

function Nav() {

    const location = useLocation();

    return (
        <div>
            <NavList>
                {
                    LINKS.map(item => <li key = {item.to}>
                        <LinkStyled to = {item.to} className = {item.to === location.pathname? "active" : ""}>
                            {item.name}
                        </LinkStyled></li>)
                }
            </NavList>
        </div>
    )
}

export default Nav
