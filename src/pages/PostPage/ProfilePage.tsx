// src/pages/PostPage/ProfilePage.tsx
import React from "react";
import coggyImage from "../../image/coggy.png";

interface ProfilePageProps {
  onGoBack: () => void;
  // onNavigate: (view: string) => void; // 이 부분을 삭제합니다.
}

function ProfilePage({ onGoBack }: ProfilePageProps) {
  const profile = {
    name: "김태영",
    email: "coggy123@naver.com",
    studentId: "2020143048",
    major: "정보통신학과",
    year: "4학년",
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
            프로필
          </h1>
          <img
            src={coggyImage}
            alt="Coggy"
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </div>

        {/* 프로필 정보 섹션 */}
        <div className="space-y-4">
          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl font-bold mb-2 overflow-hidden">
              <img
                src={coggyImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">이메일</p>
            <p className="text-gray-700 font-medium">{profile.email}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">학번</p>
            <p className="text-gray-700 font-medium">{profile.studentId}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">학과</p>
            <p className="text-gray-700 font-medium">{profile.major}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">학년</p>
            <p className="text-gray-700 font-medium">{profile.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;