import {createBrowserRouter,RouterProvider} from "react-router-dom"
import React,{useState,useEffect} from "react"
import Home from "./Home"
import Trailer from "./Trailer"
import Login from "./Login"
import Nav from "../Nav"
import Shows from "../Shows"
import Movies from "./Movies"
import Games from "../Games"
import New from "../New"
import My from "../My"
function App(){
  // json-server --watch db.json --port 5000
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Login></Login></>
    },
    {
      path:"/home",
      element:<><Nav></Nav><Home></Home></>
    },
    {
      path:"/trailer",
      element:<><Trailer></Trailer></>
    },
    {
      path:"/shows",
      element:<><Nav></Nav><Shows></Shows></>
    },
    {
      path:"/movies",
      element:<><Nav></Nav><Movies></Movies></>
    }
    ,{
      path:"/games",
      element:<><Nav></Nav><Games></Games></>
    },
    {
      path:"/New",
      element:<><Nav></Nav><New></New></>
    },
    {
      path:"/my",
      element:<><Nav></Nav><My></My></>
    }
   
  ])
      

  return(
          <>
   <RouterProvider router={router}></RouterProvider>
   
   

    </>
  )  
}
export default App