"use client";

import React, { useState } from "react";
import { PiUserCircle } from "react-icons/pi";
import SignUpModal from "./SignUpModal";

const UserProfileSave: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center bg-active h-24 w-11/12 mt-12 rounded-2xl cursor-pointer p-2 relative">
        <div className="items-center flex">
          <PiUserCircle className="absolute left-4 text-6xl text-white" />
          <div
            className="flex-wrap justify-center w-full h-full items-center ml-6"
            onClick={handleOpenModal}
          >
            <p className="text-white text-lg font-bold">
              유저 정보를 입력해주세요.
            </p>
            <p>아무개</p>
          </div>
        </div>
        <SignUpModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default UserProfileSave;
