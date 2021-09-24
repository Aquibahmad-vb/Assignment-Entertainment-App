import React from 'react'
import './SearchBox.css'

export const SearchBox = (props) => {
    return (

        <div className="box2 searchbox">
                <input type="text" placeholder="Type Song Name" className="search" id="search"
                onChange={e =>{props.setsearchSong(e.target.value)}}/>
        </div>
    );
}
