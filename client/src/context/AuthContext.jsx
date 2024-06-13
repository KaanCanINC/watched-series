import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { CgSpinnerAlt } from "react-icons/cg";

const cookies = new Cookies();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState();
   const [userData, setUserData] = useState()
   const [avatar, setAvatar] = useState()
   const token = cookies.get("JWT_TOKEN");

   useEffect(() => {
      const checkToken = async (token) => {
         try {
            const response = await axios.get("http://localhost:3001/api/users/auth", {
               headers: { "x-access-token": token },
            });
            setUser(response.status === 200);
         } catch (error) {
            console.error(error);
            setUser(false);
            cookies.remove("JWT_TOKEN");
         }
      };

      if (token) {
         checkToken(token);
      } else {
         setUser(false);
         cookies.remove("JWT_TOKEN");
      }
   }, [token]);


   useEffect(() => {
      const getAll = async () => {
         try {
            const response = await axios.get("http://localhost:3001/api/users/getall", {
               headers: {
                  "x-access-token": token,
                  "Content-Type": "application/json",
               },
            });
            setUserData(response.data)
         } catch (error) {
            console.error(error);
         }
      };

      const getAvatar = async () => {
         try {
            const response = await axios.get("http://localhost:3001/api/users/avatar", {
               headers: {
                  "x-access-token": token,
                  "Content-Type": "application/json",
               },
               responseType: "arraybuffer"
            });
            const imageBlob = new Blob([response.data], { type: "image/jpeg" })
            const imageUrl = URL.createObjectURL(imageBlob)
            setAvatar(imageUrl)
         } catch (error) {
            console.error(error);
         }
      };

      getAvatar()
      getAll()
   }, [token])

   if (user === null) {
      return (
         <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
         >
            <CgSpinnerAlt className="animate-spin w-10 h-10 text-white" />
         </div>
      );
   }

   const logout = () => {
      setUser(false);
      cookies.remove("JWT_TOKEN");
      window.location.href = "/";
   };

   return (
      <AuthContext.Provider value={{ user, logout, userData, avatar }}>
         {children}
      </AuthContext.Provider>
   );
};
