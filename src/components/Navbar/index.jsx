import { useState } from "react";
import { FaSearch, FaListUl, FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "~/assets/images/logo.png";
import RegistrationModal from "../Modals/Registration";

const MenuToggle = ({ isOpen, onClick }) => (
   <button onClick={onClick} className="block lg:hidden">
      {isOpen === false ? <FaBars /> : <FaTimes />}
   </button>
);

const MobileMenu = ({ isOpen, onClick }) => (
   <div
      className={`absolute left-0 top-16 z-0 w-full overflow-hidden bg-white shadow-lg ${isOpen ? "flex animate-expand" : "hidden animate-collapse"
         }`}
   >
      <ul className="flex w-full flex-col items-center py-4">
         <li className="flex items-center gap-2 p-2" onClick={onClick}>
            <FaUser />
            <span>Hesabım</span>
         </li>
         <li className="flex items-center gap-2 p-2">
            <FaListUl className="h-4 w-4 cursor-pointer" />
            <span>İzleme listem</span>
         </li>
         <li className="p-2">
            <input
               type="text"
               placeholder="Search"
               className="rounded border p-1"
            />
         </li>
      </ul>
   </div>
);

const DesktopMenu = ({ onClick }) => (
   <ul className="hidden items-center gap-5 lg:flex">
      <li>
         <FaSearch className="h-4 w-4 cursor-pointer" />
      </li>
      <li>
         <FaListUl className="h-4 w-4 cursor-pointer" />
      </li>
      <li>
         <button onClick={onClick}>
            <FaUser className="h-6 w-6 cursor-pointer" />
         </button>
      </li>
   </ul>
);

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [modalIsOpen, setModalIsOpen] = useState(false);

   return (
      <header className="z-10 h-16 w-screen px-3 shadow-lg lg:px-60 lg:shadow-lg">
         <div className="flex flex-row items-center justify-between">
            <div>
               <img src={logo} alt="" width={60} />
            </div>
            <div>
               <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
               <div className={`lg:hidden`}>
                  <MobileMenu
                     isOpen={isOpen}
                     onClick={() => setModalIsOpen(!modalIsOpen)}
                  />
               </div>
               <DesktopMenu onClick={() => setModalIsOpen(!modalIsOpen)} />
            </div>
         </div>
         <RegistrationModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
         />
      </header>
   );
};

export default Navbar;
