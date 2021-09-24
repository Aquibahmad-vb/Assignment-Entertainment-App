import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <div className="header" id="header">
            <h3 class="headerItem" id="title">Entertainment-App</h3>
            <a href="#" className="headerItem" id="signout">
                <p>Signout</p>
            </a>
        </div>
    )
}
