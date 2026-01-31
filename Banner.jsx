import "./banner.css"
import React,{useState,useRef,useEffect} from "react"
function Banner(){
     const[hide,setHide]=useState(false)
     const[imagehide,setImagehide]=useState(true)
     const Video=useRef(null)
     useEffect(Task,[hide])
     function Task(){
        if(hide){
            Video.current.play()
        }
     }
     function handler(){
        setImagehide(false)
        setHide(true)
       
            
        }  
     function handler1(){
        Video.current.pause()
     }   
    return(
        <>
        <div className="Container3">
            {imagehide &&<img className="wallpaper-kgf" src="k.jpg" alt="" />}
            {hide && <video ref={Video} className="parent2" src="Animal.mp4"  muted ></video>}


       
        
       
        <div className="Text">
            <h1 className="h1">KGF</h1>
            <p className="description">A young man rises from poverty to become a feared underworld kingpin.<br></br>
        With ambition, power, and danger at every step, he fights to control
        the gold mines of Kolar.</p>
            <button className="textbutton" onClick={handler}>Play</button>
            <button className="textbutton" onClick={handler1}>Pause</button>

        </div>
        </div>
        </>
    )
}
export default Banner