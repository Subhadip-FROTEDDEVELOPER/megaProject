import React, { useState } from "react";
import {Header,MovieLists,Footer} from "./index"
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeCheck = isDarkMode ? <MdOutlineLightMode className="text-xl"/> : <MdDarkMode className="text-xl"/>;
  const backgroundColorCheck = isDarkMode ? "bg-gray-50 " : "bg-gray-900";
  const textColorCheck = isDarkMode ? "text-gray-900" : "text-gray-100";

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
