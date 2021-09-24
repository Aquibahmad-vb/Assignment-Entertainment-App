import React from 'react'
import './AddMediaPlayer.css'

export const AddMediaPlayer = () => {

    return (
        <>
        <div className="box mediaPlayer">   
        <audio controls id="mediaPlayer">
        <source type="audio/mpeg"/>
        </audio>
        </div>
        </>
    );
}
