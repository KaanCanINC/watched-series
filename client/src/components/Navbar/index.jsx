import { useState } from "react";
import { FaSearch, FaListUl, FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import logo from "~/assets/images/logo.png";
import RegistrationModal from "../Modals/Registration/RegistrationModal";
import Button from "../Button";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [modalIsOpen, setModalIsOpen] = useState(false);

   return (
      <header className="h-16 w-screen px-3 shadow lg:px-60 lg:shadow-lg">
         <div className="flex flex-row items-center justify-between">
            <div>
               <img src={logo} alt="" width={60} />
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
                        <li className="flex items-center gap-2 p-2" onClick={() => setModalIsOpen(true)}>
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
                     <FaSearch className="h-4 w-4 cursor-pointer" />
                  </li>
                  <li>
                     <FaListUl className="h-4 w-4 cursor-pointer" />
                  </li>
                  <li>
                     <FaUser
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => setModalIsOpen(true)}
                     />
                  </li>
               </ul>
            </div>
         </div>
         <RegistrationModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
         />
      </header >
   );
};

export default Navbar;
