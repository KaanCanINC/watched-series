import { useState } from "react";
import { FaSearch, FaListUl, FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "~/assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 w-screen px-3 shadow lg:px-60 lg:shadow-lg">
      <div className="flex flex-row items-center justify-between">
        <div>
          <img src={logo} alt="" width={60} />
        </div>
        <div>
          <div className="lg:hidden">
            <div>
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen === false ? <FaBars /> : <FaTimes />}
              </button>
            </div>
            <div
              className={`${isOpen ? "!flex animate-expand" : "!animate-collapse"} absolute left-0 top-16 hidden w-screen overflow-hidden bg-white shadow-lg lg:hidden`}
            >
              <ul className="flex w-full flex-col items-center py-4">
                <li className="flex items-center gap-2 p-2">
                  <span>
                    <FaUser />
                  </span>
                  Hesabim
                </li>
                <li className="flex items-center gap-2 p-2">
                  <FaListUl className="h-4 w-4 cursor-pointer" />
                  <span>Izleme listem</span>{" "}
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
          <ul className="hidden items-center justify-between gap-5 lg:inline-flex">
            <li>
              <FaSearch className="h-4 w-4 cursor-pointer" />
            </li>
            <li>
              <FaListUl className="h-4 w-4 cursor-pointer" />
            </li>
            <li>
              <FaUser className="h-6 w-6 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
