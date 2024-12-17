import React from "react";
const Header = ({
  handleThemeMode,
  themeCheck,
  backgroundColorCheck,
  textColorCheck,
}) => {
  return (
    <header
      className={`container flex justify-between items-center p-4
    ${backgroundColorCheck} ${textColorCheck} duration-200 fixed`}
    >
      <div className="text-2xl font-bold">
        <a href="#">EntertainmentSite</a>
      </div>

      <nav className="hidden md:flex gap-x-6">
        <a href="#home" className="">
          Home
        </a>
        <a href="#movies" className="">
          Movies
        </a>
        <a href="#tvshows" className="">
          TV Shows
        </a>
        <a href="#music" className="">
          Music
        </a>
        <a href="#news" className="">
          News
        </a>
        <a href="#contact" className="">
          Contact
        </a>
      </nav>

      <div className="relative">
        <input
          id="text"
          type="text"
          className="  rounded-full pl-4 pr-10 py-2 focus:outline-none border-2	text-black"
          placeholder="Search..."
          name="search"
        />
        <button className="absolute right-0 top-0 mt-3 mr-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5A7 7 0 115 7a7 7 0 0110 10z"
            />
          </svg>
        </button>
      </div>

      <div className=" md:flex items-center space-x-4">
        <button
          className="rounded-full px-4 py-2 focus:outline-none"
          onClick={handleThemeMode}
        >
          {themeCheck}
        </button>
        <a
          href="#signup"
          className={`bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2`}
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
