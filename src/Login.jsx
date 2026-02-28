import "../login.css"
import React,{useState,useRef} from "react"
import { useNavigate } from "react-router-dom"

function Login(){

  const [error,setError] = useState(null)
  const navigate = useNavigate()

  const email = useRef(null)
  const password = useRef(null)

  function handler(e){
    e.preventDefault()

    const userEmail =
      email.current.value.trim().toLowerCase()

    const userPassword =
      password.current.value.trim()

    if (userEmail === "lokesh" && userPassword === "1234") {
      navigate("/home")
      setError(null)
    } else {
      setError("Invalid credentials")
    }
  }

  return(
    <div className="Parent">
      <div className="Container">

        <form onSubmit={handler}>
          <h1>Sign In</h1>

          <input
            type="text"
            placeholder="Email or Phone number"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
            ref={email}
          />

          <br /><br />

          <input
            type="password"
            placeholder="Password"
            ref={password}
          />

          <br /><br />

          <button type="submit">Sign In</button>
        </form>

        {error && (
          <div className="wrong">
            <h1>{error}</h1>
          </div>
        )}

      </div>
    </div>
  )
}

export default Login
