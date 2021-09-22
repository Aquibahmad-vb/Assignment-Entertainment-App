import React from 'react'

export const SearchBox = () => {
    const searchbox={
        position:"relative",
        left:"28rem",
        top:"0.6rem",
        marginTop:"1.2%",
        width:"35rem",
        borderRadius:"1rem",
        height:"2.4rem",
        paddingLeft:"2rem",
        fontWeight:"bold",
        fontSize:"1rem",
        outline:"none"
    }
    return (

        <div className="box2 searchbox">
            <form action="">
                <input type="text" placeholder="Type Song Name" className="search" style={searchbox}/>

            </form>
        </div>
    )
}
