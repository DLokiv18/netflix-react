import React,{useState} from "react"
import { useLocation } from "react-router-dom";
function Trailer(){
    const location = useLocation();
    const { trailerid } = location.state || {};

  if (!trailerid) return <div>No trailer selected</div>;

    
    
    return(
        <>
       <iframe
      width="100%"
      height="500"
      src={trailerid}
      allowFullScreen
    />
        </>
    )
}
export default Trailer
