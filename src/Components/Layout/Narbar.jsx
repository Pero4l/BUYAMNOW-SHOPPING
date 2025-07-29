import React from "react";
import { LuUserRound } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="w-11/12 mx-auto flex justify-between items-center p-2 py-5">
          <ul className="hidden lg:flex text-lg justify-center gap-x-10 text-black">
           <Link to="/">
           <li className="relative group cursor-pointer">
              HOME
              <span className="bg-black rounded-lg  absolute -bottom-1 left-0 w-0 h-1 transition-all duration-300 ease-out group-hover:w-[50%]"></span>
            </li>
           </Link>
            <li className="relative group cursor-pointer">
              SHOP
              <span className="bg-black rounded-lg  absolute -bottom-1 left-0 w-0 h-1 transition-all duration-300 ease-out group-hover:w-[50%]"></span>
            </li>
          </ul>

          <h1 className="lg:text-3xl text-2xl text-black w-74 font-semibold lg:p-5 flex gap-[0.5px] lg:gap-2">
            BuyAmNow
            <span className="border border-green-950 lg:size-5 size-4 flex justify-center items-center text-xs lg:text-sm rounded-full ">
              R
            </span>
          </h1>

          <div className="flex justify-center items-center gap-x-3">
            <button>
              {" "}
              <LuUserRound className="lg:text-3xl text-xl font-bold text-black relative bottom-1" />
            </button>
            
            <Link to="/cart">
            <button>
              <FiShoppingCart className="lg:text-3xl text-xl font-bold text-black" />
            </button>
            </Link>

           <TbMenuDeep className="text-3xl lg:hidden"/>
          </div>
        </nav>

        {/* Desktop  search bar */}
        <div className="lg:block lg:w-2/5 mx-auto h-16 hidden relative rounded-xl shadow-sm shadow-stone-500 overflow-hidden">
          <button className="absolute size-16 border-none rounded-l-xl top-0 left-0 text-3xl flex justify-center items-center text-white bg-black">
            <CiSearch />
          </button>
          <input
            type="text"
            placeholder="search for your favourite product...."
            className="focus:outline-none border-none w-full h-full pl-20"
          />
        </div>

        {/*  Mobile search bar */}
        <div className="lg:hidden block lg:w-2/5 w-11/12 mx-auto h-14 relative rounded-xl shadow-sm shadow-stone-500 overflow-hidden">
          <button className="absolute size-16 border-none rounded-l-xl top-0 left-0 text-3xl flex justify-center items-center text-stone-700">
            <CiSearch />
          </button>
          <input
            type="text"
            placeholder="search for your favourite product...."
            className="focus:outline-none border-none w-full h-full pl-13"
          />
          <button className="absolute top-[4px] right-[3px] h-12 size-12 flex justify-center gap-3 items-center bg-black rounded-lg text-white text-2xl">
            <VscSettings />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
