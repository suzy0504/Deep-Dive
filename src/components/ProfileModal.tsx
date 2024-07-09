"use client";

import { isEmailRegistered, signUpWithEmail } from "@/api/auth";
import { validateForm } from "@/utils/validateForm";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (!validateForm({ email, password, nickname })) return;
    if (!(await isEmailRegistered({ email }))) return;

    await signUpWithEmail({ email, password, nickname });
    setNickname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-10/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl mb-4 font-bold">회원가입</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              닉네임
            </label>
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSignUp}
              type="button"
              className="bg-main hover:bg-active text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              저장
            </button>
            <button
              type="button"
              className="ml-4 bg-point hover:bg-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
