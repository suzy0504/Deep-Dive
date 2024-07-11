"use client";

import { useState } from "react";

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "user-id",
        nickname,
        profile_picture: profilePicture,
      }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>유저 정보 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className=""
          />
        </div>
        <div>
          <label>프로필 사진</label>
          <input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-main">
          저장
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
