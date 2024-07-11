// import { loginWithEmail } from "@/api/auth";
// import { validateForm } from "@/utils/validateForm";
// import React, { useState } from "react";

// const LogInModal = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateForm({ email, password })) return;

//     try {
//       const userInfo = await loginWithEmail({ email, password });
//       if (userInfo) {
//         localStorage.setItem("userInfo", JSON.stringify(userInfo)); // 로컬스토리지에 저장

//         setEmail("");
//         setPassword("");
//       } else {
//         console.error("로그인 후 사용자 정보를 받아오지 못했습니다.");
//       }
//     } catch (error) {
//       console.error("로그인 실패:");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg w-10/12 md:w-1/2 lg:w-1/3">
//         <h2 className="text-2xl mb-4 font-bold">로그인</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="email">
//               이메일
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="password">
//               비밀번호
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="button"
//               className="bg-main hover:bg-active text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               로그인
//             </button>
//             <button
//               type="button"
//               className="ml-4 bg-point hover:bg-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               취소
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LogInModal;
