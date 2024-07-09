import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

type MenuKey = "fish" | "restaurant" | "weapon" | "condiment" | "gyao" | "dlc";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<Record<MenuKey, boolean>>({
    fish: false,
    restaurant: false,
    weapon: false,
    condiment: false,
    gyao: false,
    dlc: false,
  });

  const toggleOpen = (menu: MenuKey) => {
    setIsOpen({
      ...isOpen,
      [menu]: !isOpen[menu],
    });
  };

  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-white text-main shadow-lg z-10 flex flex-col p-4">
      <div className="flex items-center mb-4 border-b-2 p-2">
        <PiUserCircle className="text-3xl mr-2" />
        <p className="text-2xl font-bold">닉네임</p>
      </div>
      <ul className="mb-2">
        <div
          onClick={() => toggleOpen("fish")}
          className="flex items-center justify-between "
        >
          <p className="font-bold text-lg">도감</p>
          {isOpen.fish ? (
            <IoIosArrowUp className="text-2xl" />
          ) : (
            <IoIosArrowDown className="text-2xl" />
          )}
        </div>
        {isOpen.fish && (
          <>
            <li className="pl-4">
              <Link href="/fish">물고기</Link>
            </li>
            <li className="pl-4">요리</li>
            <li className="pl-4">보스</li>
            <li className="pl-4">피쉬몬</li>
            <li className="pl-4">포토 스팟</li>
          </>
        )}
      </ul>
      <ul className="mb-2">
        <div
          onClick={() => toggleOpen("restaurant")}
          className="flex items-center justify-between"
        >
          <p className="font-bold text-lg">식당 운영</p>
          {isOpen.restaurant ? (
            <IoIosArrowUp className="text-2xl" />
          ) : (
            <IoIosArrowDown className="text-2xl" />
          )}
        </div>
      </ul>
      <ul className="mb-2">
        <div
          onClick={() => toggleOpen("weapon")}
          className="flex items-center justify-between"
        >
          <p className="font-bold text-lg">무기</p>
          {isOpen.weapon ? (
            <IoIosArrowUp className="text-2xl" />
          ) : (
            <IoIosArrowDown className="text-2xl" />
          )}
        </div>
      </ul>
      <ul className="mb-2">
        <div
          onClick={() => toggleOpen("condiment")}
          className="flex items-center justify-between"
        >
          <p className="font-bold text-lg">부재료 및 조미료</p>
          {isOpen.condiment ? (
            <IoIosArrowUp className="text-2xl" />
          ) : (
            <IoIosArrowDown className="text-2xl" />
          )}
        </div>
      </ul>
      <ul className="mb-2">
        <div
          onClick={() => toggleOpen("gyao")}
          className="flex items-center justify-between"
        >
          <p className="font-bold text-lg">갸오</p>
          {isOpen.gyao ? (
            <IoIosArrowUp className="text-2xl" />
          ) : (
            <IoIosArrowDown className="text-2xl" />
          )}
        </div>
      </ul>
      <ul className="mb-2">
        <div
          onClick={() => toggleOpen("dlc")}
          className="flex items-center justify-between"
        >
          <p className="font-bold text-lg">DLC</p>
          {isOpen.dlc ? (
            <IoIosArrowUp className="text-2xl" />
          ) : (
            <IoIosArrowDown className="text-2xl" />
          )}
        </div>
      </ul>
      <div className="border-t-2 p-2 mt-2 flex items-center text-gray-500">
        <IoSettingsSharp className="text-xl mr-2" />
        <p className="font-bold">Settings</p>
      </div>
    </div>
  );
};

export default SideBar;
