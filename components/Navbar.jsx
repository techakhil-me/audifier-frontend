import { useState } from "react";
import classNames from "classnames";
import Searchbar from "./Searchbar";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-screen fixed z-50 top-0 backdrop-blur-xl bg-light/50">
      <div
        className={classNames({
          "menu w-screen h-screen flex flex-col justify-center items-center text-base font-semibold tracking-widest leading-none text-subtitle space-y-6 transition transition-all duration-500 ease-in-out fixed bg-light": true,
          "opacity-1": open,
          "opacity-0 invisible": !open
        })}
      >
        <div className="font-bold text-dark">Trending</div>
        <div>Top Rated</div>
        <div>Genres</div>
        <button className="h-10">
          <div className="flex items-center justify-center flex-1 h-full px-8 bg-purple shadow rounded-full text-white shadow-lg">
            Login
          </div>
        </button>
      </div>
      <div className="container mx-auto flex  items-center justify-between px-8 pt-8 pb-4">
        <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={classNames({
                "block absolute h-0.5 w-5 bg-dark transform transition duration-500 ease-in-out": true,
                "rotate-45": open,
                "-translate-y-1.5": !open
              })}
            ></span>
            <span
              aria-hidden="true"
              className={classNames({
                "block absolute h-0.5 w-5 bg-dark transform transition duration-500 ease-in-out": true,
                "opacity-0": open
              })}
            ></span>
            <span
              aria-hidden="true"
              className={classNames({
                "block absolute h-0.5 w-5 bg-dark transform transition duration-500 ease-in-out": true,
                "-rotate-45": open,
                "translate-y-1.5": !open
              })}
            ></span>
          </div>
        </button>
        <div className="flex  items-center text-base font-semibold tracking-widest leading-none text-subtitle space-x-6 ">
          <img
            className="w-8 hidden md:block"
            src="https://cdn.discordapp.com/attachments/765973145852575746/925460482108833842/unknown.png"
            alt=""
          />
          <div className="font-bold text-dark hidden md:block fx-underline py-2">
            Trending
          </div>
          <div className="hidden md:block fx-underline py-2">Top Rated</div>
          <div className="hidden md:block fx-underline py-2">Genres</div>
        </div>
        <div className="h-10 flex space-x-4 text-subtitle grow ml-4">
          <Searchbar />
          <div className="hidden md:flex items-center justify-center flex-1 h-full px-8 font-semibold bg-purple  rounded-full text-white shadow-lg hover:shadow-sm">
            Login
          </div>
        </div>
        <img
          className="w-8 md:hidden ml-4"
          src="https://cdn.discordapp.com/attachments/765973145852575746/925460482108833842/unknown.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
