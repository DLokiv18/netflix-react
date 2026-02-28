import React,{useState,useRef,useEffect} from "react"
function Showbanner(){
         const[hides,setHides]=useState(false)
         const[imagehides,setImagehides]=useState(true)
         const Videos=useRef(null)
         useEffect(Tasks,[hides])
         function Tasks(){
            if(hides){
                Videos.current.play()
            }
         }
         function handlers(){
            setImagehides(false)
            setHides(true)
           
                
            }  
         function handlers1(){
            Videos.current.pause()
         }   
        return(
            <>
            <div className="Container3">
                {imagehides &&<img className="wallpaper-kgf" src="/images/iron.jpg" alt="" />}
                {hides && <video ref={Videos} className="parent2" src="/images/avengersendgame.mp4"  muted ></video>}
    
    
           
            
           
            <div className="Text">
                <h1 className="h1">Iron Man</h1>
                <p className="description">A billionaire genius, Tony Stark builds a high-tech armored suit to save his life and becomes the legendary hero Iron Man. <br />When a deadly enemy rises, he must choose between the man he is and the hero the world needs.
</p>
                <button className="textbutton" onClick={handlers}>Play</button>
                <button className="textbutton" onClick={handlers1}>Pause</button>
    
            </div>
            </div>
            </>
        )
}
export default Showbanner