import { useState } from "react";
import RegisterSection from "./RegisterSection";
import LoginSection from "./LoginSection";
import handleRegister from "~/services/authService";

const RegistrationModal = ({ isOpen, onClose }) => {
   const [isRegistered, setIsRegistered] = useState(true);
   const [errorMessage, setErrorMessage] = useState("")
   const [user, setUser] = useState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      dateofbirth: "",
      notify: false,
   });

   const handleInputChange = (e) => {
      const { id, value } = e.target;
      setUser((prevUser) => ({
         ...prevUser,
         [id]: value,
      }));
   };

   if (!isOpen) return null;
   return (
      <div
         className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
         onClick={onClose}
      >
         <div
            className="w-10/12 max-w-4xl rounded-lg bg-white shadow-lg lg:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
         >
            {!isRegistered ? (
               <RegisterSection
                  setIsRegistered={setIsRegistered}
                  onChange={handleInputChange}
                  user={user}
                  notify={(e) =>
                     setUser((prevUser) => ({ ...prevUser, notify: e.target.checked }))
                  }
                  onClick={(event) => handleRegister(event, user, setIsRegistered, onClose, setErrorMessage)}
                  error={errorMessage}
               />
            ) : (
               <LoginSection setIsRegistered={setIsRegistered} />
            )}
         </div>
      </div>
   );
};

export default RegistrationModal;
