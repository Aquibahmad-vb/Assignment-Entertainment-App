import React,{ useState } from 'react';
import './Likes.css';

export const Likes = (props) => {
    let [isalredyliked, setisalredyliked] = useState(false);
    let [like, setlike] = useState(props.like);
    const [bgcolor, setbgcolor] = useState({
        color:"gray",
        fontSize:"20px",
    })

    // function for increment and decrement like and
    const increment=()=>{
        if(isalredyliked===true)
        {
            setlike(like-1);
            setbgcolor({
                color:"gray",
                fontSize:"20px"
            });
            setisalredyliked(false);
        }
        else{
            setlike(like+1);
            setbgcolor({
                color:"red",
                fontSize:"20px"
            });
            setisalredyliked(true);
        }
    }
    return (
        <div className="box">
            <p className="box-1" id="likeCount">{like} </p>
            <i className="fas fa-thumbs-up box-1" style={bgcolor} id="likeIcon" onClick={increment}></i>
        </div>
    )
}
