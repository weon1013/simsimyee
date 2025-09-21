// src/components/SettingsPage.tsx
import React, { useState } from "react";
import coggyImage from "../../image/coggy.png";

interface SettingsPageProps {
  onGoBack: () => void;
  onNavigate: (view: "languageSelect" | string) => void;
}

function SettingsPage({ onGoBack, onNavigate }: SettingsPageProps) {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const handleItemClick = (settingName: string) => {
    if (settingName === "언어선택") {
      onNavigate("languageSelect");
    } else {
      console.log(`${settingName} 클릭됨!`);
      // TODO: 여기에 실제 설정 항목별 로직을 추가하세요.
    }
  };

  const handleNotificationToggle = () => {
    setIsNotificationEnabled(!isNotificationEnabled);
    console.log(
      `알림 설정이 ${isNotificationEnabled ? "켜짐" : "꺼짐"}으로 변경되었습니다.`
    );
    // TODO: 알림 설정 상태를 서버에 저장하는 로직을 여기에 추가하세요.
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
            환경설정
          </h1>
          <img
            src={coggyImage}
            alt="Coggy"
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </div>

        {/* 설정 항목 리스트 */}
        <div className="space-y-6">
          {/* 계정 설정 */}
          <div>
            <h2 className="text-lg font-bold text-gray-700 mb-2">계정설정</h2>
            <ul className="space-y-2">
              <li
                onClick={() => handleItemClick("프로필")}
                className="cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm"
              >
                🐕 프로필
              </li>
              <li
                onClick={() => handleItemClick("비밀번호 변경")}
                className="cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm"
              >
                🔑 비밀번호 변경
              </li>
              <li
                onClick={() => handleItemClick("로그아웃")}
                className="cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm"
              >
                🔐 로그아웃
              </li>
            </ul>
          </div>

          {/* 앱 설정 */}
          <div>
            <h2 className="text-lg font-bold text-gray-700 mb-2">앱설정</h2>
            <ul className="space-y-2">
              <li
                onClick={handleNotificationToggle}
                className="cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm flex justify-between items-center"
              >
                <span>🔔 알림설정</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isNotificationEnabled}
                    onChange={handleNotificationToggle}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </label>
              </li>
              <li
                onClick={() => onNavigate("languageSelect")}
                className="cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm"
              >
                🔠 언어선택
              </li>
            </ul>
          </div>

          {/* 기타 */}
          <div>
            <h2 className="text-lg font-bold text-gray-700 mb-2">기타</h2>
            <ul className="space-y-2">
              <li
                onClick={() => handleItemClick("앱정보")}
                className="cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm"
              >
                ℹ 앱정보
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;