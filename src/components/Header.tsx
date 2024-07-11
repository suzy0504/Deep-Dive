"use client";

import { useEffect, useRef, useState } from "react";
import { Gugi } from "next/font/google";
import { IoIosMenu } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import SideBar from "./SideBar";

const gugi = Gugi({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const [isSideBarVisible, setSideBarVisible] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const toggleSideBar = () => {
    setSideBarVisible(!isSideBarVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setSideBarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-main w-full h-20 flex justify-center items-center p-3 relative">
      <div className="flex justify-center items-center">
        <IoIosMenu
          className="absolute left-3 text-white text-6xl hover:text-point mr-2 cursor-pointer"
          onClick={toggleSideBar}
        />
        <p className={`${gugi.className} flex text-4xl text-white`}>
          Deep Dive
        </p>
        <PiUserCircle className="text-white text-5xl absolute right-3 ml-2 cursor-pointer hover:text-point" />
      </div>
      {isSideBarVisible && (
        <div ref={sideBarRef}>
          <SideBar />
        </div>
      )}
    </div>
  );
};

export default Header;
