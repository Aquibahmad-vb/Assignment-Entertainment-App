// import React from 'react'
// import React,{ useState } from 'react';
import {Likes} from './Likes';
import {AddMediaPlayer} from './AddMediaPlayer';

export const SongList = ({song,onDelete}) => {
    const deletebtn={
        width:"4.3rem",
        height:"3rem",
        borderRadius:"1rem",
        // backGround:"red"
        color:"red",
        fontWeight:"bold",
        fontSize:"0.9rem"
    }
    const dropdown={
        width:"4rem",
        height:"2.5rem",
        borderRadius:"1rem",
        fontWeight:"800",
        color:"red",
        fontSize:"20px",
        paddingTop:".5rem"
    }
    const style={
        position:"relative",
        width:"20rem",
        left:"1rem",
        top:".6rem"
    }
    return (
        <>
        <div className="song">
            <Likes like={song.like}/>
            <div className="title box">
                <div>
                    <h4 style={style}>{song.title}</h4><br/>
                    <p style={{
                        paddingLeft:"1rem",
                    }}>{song.subtitle}</p>
                </div>
            </div>

            <AddMediaPlayer />
            <div className="box dropDown">
                <button style={dropdown} ><i class="fas fa-chevron-down"></i></button>
                <div className="dropDown-content">
                    <button style={deletebtn} onClick={()=>{onDelete(song)}}>Delete</button>
                </div>
            </div>
        </div>
        <hr style={{
            margin:"0 5rem",
            marginTop:"1.2rem"
        }}/>
        </>
    )
}
