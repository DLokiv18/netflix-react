import Showbanner from "./Showbanner"
import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
function Shows(){
    const navigate=useNavigate()
        const[showmovie,setshowMovie]=useState([])
        useEffect(Task2,[])
        function Task2(){
            fetch("/db.json")
            .then(response=>response.json())
            .then(data=>setshowMovie(data.shows))
        }
        function task3(trailerid){
            
            navigate("/trailer",{state:{trailerid}})
    
        }    
    return(
        <>
        <Showbanner></Showbanner>
        
        <div className="Container1">
             
            {showmovie.map((x)=><img className="movie" src={x.image} onClick={()=>task3(x.trailerid)}/>)}
        </div>
       
        </>
    )
}
export default Shows

   