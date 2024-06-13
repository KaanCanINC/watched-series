import { useState } from "react";
import RegisterSection from "./RegisterSection";
import LoginSection from "./LoginSection";
import { handleRegister, handleLogin } from "~/services/authService";

const RegistrationModal = ({ isOpen, onClose }) => {
   const [isRegistered, setIsRegistered] = useState(true);
   const [loading, setLoading] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [userLogin, setUserLogin] = useState({
      email: "",
      password: "",
   });
   const [user, setUser] = useState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      dateofbirth: "",
      notify: false,
   });

   const handleInputChange = (e, setter) => {
      const { id, value } = e.target;
      setter((prevUser) => ({
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
            className={`${isOpen ? "animate-modalOpen" : "!animate-modalClose"}  w-10/12 max-w-4xl rounded-lg bg-white shadow-lg lg:overflow-hidden `}
            onClick={(e) => e.stopPropagation()}
         >
            {!isRegistered ? (
               <RegisterSection
                  setIsRegistered={setIsRegistered}
                  onChange={(e) => handleInputChange(e, setUser)}
                  user={user}
                  notify={(e) =>
                     setUser((prevUser) => ({ ...prevUser, notify: e.target.checked }))
                  }
                  onClick={(event) =>
                     handleRegister(
                        event,
                        user,
                        setIsRegistered,
                        onClose,
                        setErrorMessage,
                     )
                  }
                  error={errorMessage}
               />
            ) : (
               <LoginSection
                  setIsRegistered={setIsRegistered}
                  onChange={(e) => handleInputChange(e, setUserLogin)}
                  user={userLogin}
                  onClick={(event) =>
                     handleLogin(
                        event,
                        userLogin,
                        onClose,
                        setErrorMessage,
                        setLoading,
                     )
                  }
                  error={errorMessage}
                  loading={loading}
               />
            )}
         </div>
      </div>
   );
};

export default RegistrationModal;
