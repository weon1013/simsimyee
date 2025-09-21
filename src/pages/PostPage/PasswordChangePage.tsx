// src/pages/PostPage/PasswordChangePage.tsx
import React, { useState } from "react";
import coggyImage from "../../image/coggy.png";

interface PasswordChangePageProps {
  onGoBack: () => void;
}

function PasswordChangePage({ onGoBack }: PasswordChangePageProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handlePasswordChange = () => {
    if (newPassword !== confirmNewPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("비밀번호 변경 시도:", { currentPassword, newPassword });
    // TODO: 여기에 실제 비밀번호 변경 로직을 추가하세요.
    // 변경 성공 후 뒤로 가기
    onGoBack();
  };

  return (
    <div className="relative z-10 flex flex-col items-center w-full max-w-md">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl w-full p-8 transform transition-transform duration-500 border border-opacity-10 border-orange-200">
        {/* 헤더 섹션 */}
        <div className="relative w-full flex justify-between items-center mb-6">
          <button
            onClick={onGoBack}
            className="p-2 rounded-full text-gray-400 hover:text-orange-600 hover:bg-white/50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-200"
            aria-label="Back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-extrabold text-orange-600 drop-shadow-sm flex-1 text-center">
            비밀번호 변경
          </h1>
          <img
            src={coggyImage}
            alt="Coggy"
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </div>

        {/* 비밀번호 변경 폼 */}
        <div className="space-y-4">
          <input
            type="password"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
          />
          <input
            type="password"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
          />
          <input
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
          />
          <button
            onClick={handlePasswordChange}
            className="w-full px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            비밀번호 변경
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordChangePage;