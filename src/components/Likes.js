// import React from 'react'
import React,{ useState } from 'react';
export const Likes = (props) => {
    const style={
        position:"relative",
        top:"0.7rem",
        // fontWeight:"bold",
        fontSize:"1.4rem"
    }
    let [isalredyliked, setisalredyliked] = useState(false);
    let [like, setlike] = useState(props.like);
    const [bgcolor, setbgcolor] = useState({
        color:"gray",
        fontSize:"40px",
    })

    const increment=()=>{
        if(isalredyliked===true)
        {
            setlike(like-1);
            setbgcolor({
                color:"gray",
                fontSize:"40px"
            });
            setisalredyliked(false);
        }
        else{
            setlike(like+1);
            setbgcolor({
                color:"red",
                fontSize:"40px"
            });
            setisalredyliked(true);
        }
    }
    return (
        <div className="box">
            <p className="box-1" style={style}>{like} </p>
            <i className="fas fa-thumbs-up box-1" style={bgcolor} onClick={increment}></i>
        </div>
    )
}
