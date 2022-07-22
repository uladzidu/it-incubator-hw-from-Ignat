import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to = {'/'}>1</NavLink>
            <NavLink to = {'/2'}>2</NavLink>

        </div>
    )
}

export default Header
