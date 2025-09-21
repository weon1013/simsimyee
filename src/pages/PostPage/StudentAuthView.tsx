import React, { useState } from "react";
import coggyImage from "../../image/coggy.png";

interface StudentAuthViewProps {
  onGoBack: () => void;
}

function StudentAuthView({ onGoBack }: StudentAuthViewProps) {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("");
  const [majorQuery, setMajorQuery] = useState("");
  const [isMajorListOpen, setIsMajorListOpen] = useState(false);

  const years = ["1학년", "2학년", "3학년", "4학년"];
  const majors = ["정보통신학과", "융합소프트웨어학과", "ICT 환경융합학과"];

  const filteredMajors = majors.filter(major =>
    major.toLowerCase().includes(majorQuery.toLowerCase())
  );

  const handleAuthSubmit = () => {
    console.log("재학생 인증 시도:", { studentId, studentName, selectedYear, selectedMajor });
    // TODO: 여기에 실제 재학생 인증 로직을 추가하세요.
  };

  const handleMajorSelect = (major: string) => {
    setSelectedMajor(major);
    setMajorQuery(major);
    setIsMajorListOpen(false);
  };

  return (
    <div className="relative z-10 flex flex-col items-center w-full max-w-md">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl w-full p-8 transform transition-transform duration-500 border border-opacity-10 border-orange-200">
        {/* 헤더 섹션 - 코기 이미지를 오른쪽으로 이동 */}
        <div className="relative w-full flex justify-between items-start mb-6">
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
          <div className="flex-1 flex flex-col items-center ml-4 mr-4 text-center">
            <h1 className="text-2xl font-extrabold text-orange-600 drop-shadow-sm">
              평택대학교 재학생 인증
            </h1>
          </div>
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
              🧑‍🎓 이름 / 학번 인증
            </h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="이름 입력" // 이름 입력란이 위로
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
              />
              <input
                type="text"
                placeholder="학번 입력" // 학번 입력란이 아래로
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
              />
            </div>
          </div>
          <button
            onClick={handleAuthSubmit}
            className="w-full px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            인증
          </button>

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
          
          {/* 학과 선택 (검색 기능만) */}
          <div className="relative">
            <h2 className="text-lg font-bold text-gray-700 mb-2">학과 선택</h2>
            <input
              type="text"
              placeholder="학과 검색..."
              value={majorQuery}
              onChange={(e) => {
                setMajorQuery(e.target.value);
                setIsMajorListOpen(true);
              }}
              onFocus={() => setIsMajorListOpen(true)}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
            />
            {majorQuery && isMajorListOpen && (
              <div className="absolute z-20 w-full bg-white rounded-xl shadow-lg mt-2 max-h-48 overflow-y-auto">
                {filteredMajors.length > 0 ? (
                  filteredMajors.map((major) => (
                    <button
                      key={major}
                      onClick={() => handleMajorSelect(major)}
                      className="w-full text-left py-3 px-5 hover:bg-gray-100 transition-colors duration-200 rounded-xl"
                    >
                      {major}
                    </button>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm py-3 px-5">
                    검색 결과가 없습니다.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAuthView;