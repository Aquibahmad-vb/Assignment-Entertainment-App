import React,{ useState } from 'react';
import './App.css';
import {Songs} from './components/Songs';
import {SearchBox} from './components/SearchBox';
import{AddSong} from './components/AddSong';
import MusicData from './components/MusicData';
import {Header} from './components/Header'


function App() {

  const [musicdata,Setmusicdata]=useState(MusicData);
  const [searchSong, setsearchSong] = useState('');
  // function for delete songs
  const onDelete=(songs)=>{
    Setmusicdata(musicdata.filter((event)=>{
      return event!==songs;
    }))
  }

  // functiom for add new song
  const addSong=(songName,songSubtitle)=>{
    let _id;
    musicdata.length===0?_id=1:_id=musicdata[musicdata.length-1].id+1;
    const newSong={
      id:_id,
      title:songName,
      subtitle:songSubtitle,
      like:0,
      media:""
    }
    console.log(newSong);
    Setmusicdata([...musicdata,newSong]);
  }


  return (
    <>
    <div className="canvas">
      <Header/>
      <div className="container">
        <SearchBox setsearchSong={setsearchSong}/>
        {/* {console.log(searchSong)} */}
        <Songs music={musicdata} onDelete={onDelete} searchSong={searchSong}/>
        <AddSong addSong={addSong}/>
      </div>
    </div>
    </>
  );
    
}

export default App;
