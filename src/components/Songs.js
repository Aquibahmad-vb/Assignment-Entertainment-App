import React from 'react';
import { SongList } from './SongList';
import './Songs.css'

export const Songs = (props) => {
    return (
        
        <div className="box2 songs" style={props.overflow}>
            {/* filter songs based on search and show songs on screen */}
            {props.music.length===0 ? <div id="NoSong"> "No Songs to display add songs" </div>:
            props.music.filter((music)=>{
                if (props.searchSong==="")
                {
                    return music;
                }
                else if(music.title.toLowerCase().includes(props.searchSong.toLowerCase()))
                {
                    return music;
                }
            }).map((music)=>{
                // musicitem compoenent
                return <SongList song={music} key={music.id} onDelete={props.onDelete}/>
            }
            )}
            
        </div>
    )
}
