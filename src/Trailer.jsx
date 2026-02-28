import React,{useState} from "react"
import { useLocation } from "react-router-dom";
function Trailer(){
    const location = useLocation();
    const { trailerid } = location.state || {};

  if (!trailerid) return <div>No trailer selected</div>;

    
    
    return(
        <>
        <video src={trailerid} controls autoPlay muted></video>
        </>
    )
}
export default Trailer
