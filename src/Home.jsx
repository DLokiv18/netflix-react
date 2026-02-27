import "../home.css"
import Banner from "../Banner"
import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
function Home(){
    const navigate=useNavigate()
    const[movie,setMovie]=useState([])
    useEffect(Task,[])
    function Task(){
        fetch("http://localhost:5000/movies")
        .then(response=>response.json())
        .then(data=>setMovie(data))
    }
    function task1(trailerid){
        
        navigate("/trailer",{state:{trailerid}})

    }    
    
    return(
        <>
        
          <Banner></Banner>
        
        <div className="Container1">
             
            {movie.map((x)=><img className="movie" src={x.image} onClick={()=>task1(x.trailerid)}/>)}
        </div>
       
        </>
    )
}
export default Home