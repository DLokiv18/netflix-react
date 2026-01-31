import React,{useEffect,useState,useRef} from "react"
import { useNavigate } from "react-router-dom"
import "./movie.css"
function Movies(){
    const navigate=useNavigate()
    const [moviefloat,setmoviefloat]=useState([])
    const [hidephoto,sethidephoto]=useState()
    useEffect(Task8,[])
    function Task8(){
            fetch("http://localhost:5000/movies") 
            .then(response=>response.json())
            .then(data=>setmoviefloat(data))
}
function handler4(index){
    sethidephoto(index)
}
function handler5(){
    sethidephoto(null)
}
function handler6(trailerId){
  navigate("/trailer",{state:{trailerId}})

}
    
   
      return(
        <>
        <div className="Movie_container">
        {moviefloat.map((x,index)=>
          
         (<> 
         <div className="child" onMouseEnter={()=>{handler4(index)}} onMouseLeave={handler5}>
       {hidephoto!==index && <img className="Movie_image"src={x.image} alt="" />}
         
         

         {hidephoto===index &&<div className="childhover">
            
            <img className="childhover_image" src={x.image} alt="" />
           
            <div className="childhoverText">
               
                <button className="Buttonhover1" onClick={()=>handler6(x.trailerId)}>Watch</button>
                <button className="Buttonhover2">+</button>
                <p className="Text10">2025.U/A 16+ . 2h 29m . 7Languages</p>
                <p className="Description">{x.desc}</p>
            </div>
         </div>}
         
         
         </div></>)
         )}
        </div></>
      )
}
export default Movies