import React from 'react'
import {NavLink} from "react-router-dom";
import './hw5.css'

function Header() {
    return (
        <div className={'header'}>
            <NavLink to = {'/pre-junior'} className={'link'} >PreJunior</NavLink>
            <NavLink to = {'/junior'} className={'link'} >Junior</NavLink>
            <NavLink to = {'/junior+'} className={'link'} >JuniorPlus</NavLink>
            <div className= 'block' />
        </div>
    )
}

export default Header
