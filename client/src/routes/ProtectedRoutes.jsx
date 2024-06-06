import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom"
import axios from "axios";
import Cookies from "universal-cookie"
import { useEffect } from "react";
import RegistrationModal from "~/components/Modals/Registration/RegistrationModal";

const cookies = new Cookies()


const ProtectedRoutes = ({ element: Component, ...rest }) => {
   const [tokenVerify, setTokenVerify] = useState(null)
   const [modalIsOpen, setModalIsOpen] = useState(false);

   const token = cookies.get("JWT_TOKEN")


   useEffect(() => {
      const checkToken = async (token) => {
         try {
            const response = await axios.get("http://localhost:3001/api/test", { headers: { "x-access-token": token } })
            setTokenVerify(response.status === 200)
         } catch (error) {
            console.error(error)
            setTokenVerify(false)
         }
      }

      if (token) {
         checkToken(token)
      } else {
         setTokenVerify(false)
      }
   }, [token])

   if (tokenVerify === null) {
      return <RegistrationModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
   }

   return tokenVerify
      ? (Component)
      : (<Navigate to="/" />)
}

export default ProtectedRoutes
