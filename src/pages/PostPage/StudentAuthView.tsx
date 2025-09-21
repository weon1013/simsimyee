// src/components/StudentAuthView.tsx
import React, { useState } from "react";
import coggyImage from "../../image/coggy.png";

interface StudentAuthViewProps {
  onGoBack: () => void;
}

function StudentAuthView({ onGoBack }: StudentAuthViewProps) {
  const [studentId, setStudentId] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const years = ["1학년", "2학년", "3학년", "4학년"];

  const handleAuthSubmit = () => {
    console.log("재학생 인증 시도:", { studentId });
    // TODO: 여기에 실제 재학생 인증 로직을 추가하세요.
  };

  return (
    <div className="relative z-10 flex flex-col items-center w-full max-w-md">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl w-full p-8 transform transition-transform duration-500 hover:scale-[1.01] border border-opacity-10 border-orange-200">
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
            평택대학교 재학생 인증
          </h1>
          <img
            src={coggyImage}
            alt="Coggy"
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </div>

        <div className="space-y-6">
          {/* 재학생 인증 */}
          <div>
            <h2 className="text-lg font-bold text-gray-700 mb-2">
              학생증/학번 인증
            </h2>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="학번 입력"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="flex-1 px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
              />
              <button
                onClick={handleAuthSubmit}
                className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                인증
              </button>
            </div>
          </div>

          {/* 학년 선택 */}
          <div>
            <h2 className="text-lg font-bold text-gray-700 mb-2">학년 선택</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`py-3 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                    selectedYear === year
                      ? "bg-orange-500 text-white"
                      : "bg-gray-50 border-2 border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAuthView;