import React,{useState,useEffect,useRef} from "react"
import { useNavigate } from "react-router-dom"
import "./my.css"
function My(){
    const navigate=useNavigate()
    const [mymovie,setMymovie]=useState([])
    const[moviename,setmoviename]=useState("")
     useEffect(Task5,[])
     function Task5(){
        fetch("http://localhost:5000/movies")
        .then(response=>response.json())
        .then(data=>setMymovie(data))
     }
     const inputref=useRef(null)
     function handler1(){
      setmoviename(inputref.current.value)
      

     }
     function handler7(trailerId){
        navigate("/trailer",{state:{trailerId}})
     }

    return(
        <>
        <div className="Keyboard">
                 <input ref={inputref} className="search_bar" type="text" placeholder="Enter Movie Name"/>
                 <button className="search_button" onClick={handler1}>Search</button>
        </div>
        <div className="search">
        {mymovie.map((x)=>{
          if(moviename===x.title){
            return(
              <>
               <img className="search_image1" src={x.image}  />
               <div className="Details">
                <h1 className="Text1">{x.title}</h1>
                <p className="meta">
                     ⭐7.5 <span>|</span> Action <span>|</span>Telugu
                </p>
                <p className="MovieDes">
                  {x.desc}
                  
                </p>
                <p className="MovieCast">

                  <strong>Cast:</strong>              {x.cast}
                </p>
                

               </div>
               <div className="ButtonGroups">
               <button className="Watch" onClick={()=>handler7(x.trailerId)}>Watch Trailer</button>
               <button className="Watchbutton">+Watchlist</button>
               </div>
               </>
            )
          }
          else if(moviename===""){
            return(
              
              <img className="search_image" src={x.image}  />
              
            )
          }
          else{
            return null
          }
          
          }
        
           
              
             
              )}
              </div>
         
        </>
    )
}
export default My
       