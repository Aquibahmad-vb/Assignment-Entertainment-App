// import React from 'react'
import React,{ useState } from 'react';
import './AddSong.css'

export const AddSong = (props) => {
    
    const [display,setdisplay]=useState({
        display:'none',
    })
    const [isAddSong, setisAddSong] = useState(false)
    const [Songname, setSongname] = useState("");
    const [SongSubtitle, setSongSubtitle] = useState("");

    const showAddSongForm=()=>{
        // function show add form div
        if(isAddSong===false)
        {
            setdisplay({
                display:'flex',
            })
            setisAddSong(true);
        }
        else{
            setdisplay({
                display:'none',
            });
            setisAddSong(false);
        }
    }

    // function call on submit form and add new song
    const submit=(e)=>{
        e.preventDefault();
        if(!Songname || !SongSubtitle)
        {
            alert("song name and subtitle cannot be blank");
        }
        else{
            props.addSong(Songname,SongSubtitle);
            setdisplay({
                display:'none',
            });
            setSongSubtitle("");
            setSongname("");
        }
    }

    return (
        <div className="box2 Addsong">
            <div className="addSongform child" style={display}>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Enter song name" className="SongDetail" id="Songname" value={Songname}
                    onChange={(e)=>{setSongname(e.target.value)}}/>

                    <input type="text" placeholder="Enter subtitle" className="SongDetail" id="subtitle" value={SongSubtitle}
                    onChange={(e)=>{setSongSubtitle(e.target.value)}}/>
                    
                    <button type="submit" className="SongDetail submit" id="submitbtn">Submit</button>
                </form>
            </div>
            <div className="child" id="Addicon">
            <i class="fas fa-plus-circle" onClick={showAddSongForm}/>
            </div>
        </div>
    )
}
