import React, { useState, useEffect } from "react";
import { Header, MovieLists, Footer } from "./index";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const getThemeStorage = localStorage.getItem("themeStorage");
    return getThemeStorage === "true";
  });
  const handleThemeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    localStorage.setItem("themeStorage", isDarkMode);
  }, [isDarkMode]);

  const themeCheck = isDarkMode ? (
    <MdDarkMode 
     className="text-xl" />
  ) : (
    <MdOutlineLightMode className="text-xl" />
  );
  const backgroundColorCheck = isDarkMode ? "bg-gray-900 " : "bg-gray-50";
  const textColorCheck = isDarkMode ? "text-gray-100" : "text-gray-900";
  localStorage.setItem("themeStorage", isDarkMode);
  return (
    <>
      {
        <>
          <Header
            handleThemeMode={handleThemeMode}
            themeCheck={themeCheck}
            backgroundColorCheck={backgroundColorCheck}
            textColorCheck={textColorCheck}
          />
          <MovieLists
            handleThemeMode={handleThemeMode}
            themeCheck={themeCheck}
            backgroundColorCheck={backgroundColorCheck}
            textColorCheck={textColorCheck}
          />
          <Footer
            handleThemeMode={handleThemeMode}
            themeCheck={themeCheck}
            backgroundColorCheck={backgroundColorCheck}
            textColorCheck={textColorCheck}
          />
        </>
      }
    </>
  );
};

export default ThemeMode;
