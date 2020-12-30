import React from 'react';
import {Link} from "react-router-dom"

const LINKS = [
    {to : "/" , name: "Home"},
    {to : "/starred", name :"Starred"}
]

function Nav() {
    return (
        <div>
            <ul>
                {
                    LINKS.map(item => <li key = {item.to}><Link to = {item.to}>{item.name}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Nav
