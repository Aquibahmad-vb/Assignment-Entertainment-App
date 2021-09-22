import React from 'react'
import { SongList } from './SongList'

export const Songs = (props) => {
    const style={
        margin:"5rem 30rem",
        color:"red",
        fontweight:"bold",
        fontSize:"2rem"
    }
    return (
        
        <div className="box2 songs">
            {props.music.length===0? <div style={style}> "No Songs to display add songs" </div>:
            props.music.map((music)=>{
                // musicitem compoenent
                return <SongList song={music} key={music.id} onDelete={props.onDelete}/>
            }
            )}
            
        </div>
    )
}
