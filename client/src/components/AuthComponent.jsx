import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie"


const AuthComponent = () => {
   const [message, setMessage] = useState("")

   const cookies = new Cookies()

   const token = cookies.get("JWT_TOKEN")

   useEffect(() => {
      axios({
         method: "get",
         url: "http://localhost:3001/api/test",
         headers: {
            "x-access-token": token
         }
      }).then(res => {
         setMessage(res.data.message)
         console.log(res)
      }).catch(error => {
         console.error(error)
      })
   }, [])

   return (
      <>
         <h1>Auth comp</h1>
         <h3>{message}</h3>
      </>
   )
}

export default AuthComponent
