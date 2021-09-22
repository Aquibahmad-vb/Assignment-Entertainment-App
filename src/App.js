import React,{ useState } from 'react';
import './App.css';
import {Songs} from './components/Songs';
import {SearchBox} from './components/SearchBox';
import{AddSong} from './components/AddSong';


function App() {
  const onDelete=(songs)=>{
    console.log("iam clicked",songs);
    Setmusicdata(musicdata.filter((event)=>{
      return event!==songs;
    }))
  }
  const [musicdata,Setmusicdata]=useState([
    {
      id:1,
      like:3,
      title:"Com Truise - Flightwave",
      subtitle:"Reed",
      media:"",
  },
  {
      id:2,
      like:3,
      title:"Claude Debussy - Clair de lune",
      subtitle:"Reed",
      media:"",
  },
  {
      id:3,
      like:2,
      title:"Culture Shock - Troglodyte",
      subtitle:"Doug",
      media:"",
  },
  {
      id:4,
      like:2,
      title:"Tycho - Montana",
      subtitle:"Reed",
      media:"",
  }   
  ])
  return (
    <>
    <div className="canvas">
      <div className="container"> 
      <SearchBox/>
    <Songs music={musicdata} onDelete={onDelete}/>
    <AddSong/>
      </div>
    </div>
    </>
  );
    
}

export default App;
