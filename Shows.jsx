import Showbanner from "./ShowBanner"
import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
function Shows(){
    const navigate=useNavigate()
        const[showmovie,setshowMovie]=useState([])
        useEffect(Task2,[])
        function Task2(){
            fetch("http://localhost:5000/shows")
            .then(response=>response.json())
            .then(data=>setshowMovie(data))
        }
        function task3(trailerId){
            
            navigate("/trailer",{state:{trailerId}})
    
        }    
    return(
        <>
        <Showbanner></Showbanner>
        
        <div className="Container1">
             
            {showmovie.map((x)=><img className="movie" src={x.image} onClick={()=>task3(x.trailerId)}/>)}
        </div>
       
        </>
    )
}
export default Shows

   