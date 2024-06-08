import React from "react";
import { useState, useEffect, createContext } from "react"
import axios from "axios";
import Cookies from "universal-cookie"

const cookies = new Cookies()

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)


   const token = cookies.get("JWT_TOKEN")


   useEffect(() => {
      const checkToken = async (token) => {
         try {
            const response = await axios.get("http://localhost:3001/api/test", { headers: { "x-access-token": token } })
            setUser(response.status === 200)
         } catch (error) {
            console.error(error)
            setUser(false)
         }
      }

      if (token) {
         checkToken(token)
      } else {
         setUser(false)
         cookies.remove("JWT_TOKEN")
      }
   }, [token])

   if (user === null) {
      return <p>anan</p>
   }

   const logout = () => {
      setUser(false)
      cookies.remove("JWT_TOKEN")
      window.location.href = "/"
   }

   return (
      <AuthContext.Provider value={{ user, logout }}>
         {children}
      </AuthContext.Provider>
   )
}
