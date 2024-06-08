import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom"
import axios from "axios";
import Cookies from "universal-cookie"
import { useEffect } from "react";
import RegistrationModal from "~/components/Modals/Registration/RegistrationModal";
import { AuthContext } from "~/context/AuthContext";
import { useContext } from "react";

const cookies = new Cookies()


const ProtectedRoutes = ({ element: Component }) => {
   const { user } = useContext(AuthContext)

   return user
      ? (Component)
      : (<Navigate to="/" />)
}

export default ProtectedRoutes
