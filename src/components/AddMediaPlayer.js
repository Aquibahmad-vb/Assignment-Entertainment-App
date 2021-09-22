import React from 'react'

export const AddMediaPlayer = () => {
    const style={
        position:"relative",
        width:"45rem",
        color:"green",
    }
    return (
        <>
        <div className="box">   
        <audio controls style={style}>
        <source type="audio/mpeg"/>
        </audio>
        </div>
        </>
    );
}
