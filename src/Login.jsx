import "../login.css"
import React,{useState,useRef} from "react"
import { useNavigate } from "react-router-dom"
function Login(){
    const [error,setError]=useState(null)
    const navigate=useNavigate()
    const email=useRef(null)
    const password=useRef(null)
    const [show,setShow]=useState(true)
    function handler(e){

        e.preventDefault()
        if (email.current.value=="Lokesh" && password.current.value==1234){
            navigate("/home")
            setError("")


        }
        else{

              
              setError("Error Ocuured here ")
              setShow(false)
            
       

        }

    }
    
    return(
        <>
        <div className="Parent">
           <div className="Container">
              

             {show && <form onSubmit={handler}>
                  <h1>Sign In</h1>
                  <input type="text" placeholder="Email or Phone number" ref={email}/>
                  <br /><br />
                  <input type="password" placeholder="password" ref={password}/>
                  <br /><br />
                  <button type="submit">Sign In</button>

             </form>}

             {error && <div className="wrong"><h1>Please enter a Valid email address</h1></div>}

           </div>
        </div>
        </>
    )
}

export default Login