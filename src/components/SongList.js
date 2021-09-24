import {Likes} from './Likes';
import {AddMediaPlayer} from './AddMediaPlayer';
import './SongList.css'

export const SongList = ({song,onDelete}) => {

    return (
        <>
        <div className="song">
            <Likes like={song.like}/>
            <div className="title box">
                <div id="songDetail">
                    <h4 id="songtitle">{song.title}</h4><br/>
                    <p id="songSubTitle">{song.subtitle}</p>
                </div>
            </div>
            
            <AddMediaPlayer />
            <div className="box dropDown">
                <button id="dropDownBtn" ><i class="fas fa-chevron-down"></i></button>
                <div className="dropDown-content">
                    <button id="deleteBtn" onClick={()=>{onDelete(song)}}>Delete</button>
                </div>
            </div>
        </div>
        <hr style={{
            color:"brown",
            margin:"0.6rem",
            marginTop:"1rem"
        }}/>
        </>
    )
}
