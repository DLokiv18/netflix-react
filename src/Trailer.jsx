import React,{useState} from "react"
import { useLocation } from "react-router-dom";
function Trailer(){
    const location = useLocation();
    const { trailerId } = location.state || {};

  if (!trailerId) return <div>No trailer selected</div>;

    
    
    return(
        <>
        <video src={trailerId} controls autoPlay></video>
        </>
    )
}
export default Trailer