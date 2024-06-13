import { useState, useContext } from "react";
import {
   FaSearch,
   FaListUl,
   FaUser,
   FaBars,
   FaTimes,
   FaSignOutAlt,
} from "react-icons/fa";
import logo from "~/assets/images/logo.png";
import RegistrationModal from "../Modals/Registration/RegistrationModal";
import Button from "../Button";
import Input from "../Input";
import { AuthContext } from "~/context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
   const { avatar, user, logout } = useContext(AuthContext);
   const [isOpen, setIsOpen] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [modalIsOpen, setModalIsOpen] = useState(false);

   return (
      <header className="h-16 w-screen px-3 shadow lg:px-60 lg:shadow-lg">
         <div className="flex flex-row items-center justify-between">
            <div>
               <Link to={"/"}>
                  <img src={logo} alt="" width={60} />
               </Link>
               <ul className="absolute left-[19rem] top-[1.2rem] flex flex-row gap-3 font-bold">
                  <li className="cursor-pointer">Filmler</li>
                  <li className="cursor-pointer">Diziler</li>
                  <li className="cursor-pointer">Yeni çıkanlar</li>
                  <li className="cursor-pointer">Keşfet</li>
               </ul>
            </div>
            <div>
               <div className="lg:hidden">
                  <div>
                     <Button onClick={() => setIsOpen(!isOpen)} variant="base">
                        {isOpen ? <FaTimes /> : <FaBars />}{" "}
                     </Button>
                  </div>
                  <div
                     className={`${isOpen ? "!flex animate-expand" : "!animate-collapse"} absolute left-0 top-16 hidden w-screen overflow-hidden bg-white shadow-lg`}
                  >
                     <ul className="flex w-full flex-col items-center py-4">
                        <li
                           className="flex items-center gap-2 p-2"
                           onClick={() => setModalIsOpen(true)}
                        >
                           <span>
                              <FaUser />
                           </span>
                           Hesabim
                        </li>
                        <li className="flex items-center gap-2 p-2">
                           <FaListUl className="h-4 w-4 cursor-pointer" />
                           <span>Izleme listem</span>
                        </li>
                        <li>
                           <input
                              type="text"
                              placeholder="Search"
                              className="rounded border p-1"
                           />
                        </li>
                     </ul>
                  </div>
               </div>
               <ul className={`hidden items-center justify-between gap-5 lg:flex`}>
                  <li>
                     {
                        isSearchOpen ? <FaTimes className={`${isSearchOpen ? "animate-rotate" : "animate-rotateReverse"} h-4 w-4 cursor-pointer`}
                           onClick={() => setIsSearchOpen(!isSearchOpen)}
                        /> : <FaSearch
                           className="h-4 w-4 cursor-pointer"
                           onClick={() => setIsSearchOpen(!isSearchOpen)}
                        />}
                  </li>
                  <li>
                     <FaListUl className="h-4 w-4 cursor-pointer" />
                  </li>
                  <li>
                     {user ? (
                        <FaSignOutAlt onClick={logout} />
                     ) : (
                        <FaUser
                           className="h-6 w-6 cursor-pointer"
                           onClick={() => setModalIsOpen(true)}
                        />
                     )}
                  </li>
                  <li>
                     <img src={avatar} className="rounded-full h-12 w-12 max-w-16 max-h-16 " />
                  </li>
               </ul>
            </div>
         </div>
         <div
            className={`${isSearchOpen ? "!flex animate-expand border-y" : "!animate-collapse"} absolute left-0 hidden h-16 w-screen items-center justify-center overflow-hidden bg-white shadow-lg border-black`}
         >
            <FaSearch
               className="h-4 w-4 cursor-pointer" />
            <Input variant="search" placeholder="Arama yapın..." size="small" />
         </div>
         <RegistrationModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
         />
      </header>
   );
};

export default Navbar;
