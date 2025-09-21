//언어선택

// src/components/LanguageSelectView.tsx
import React from "react";
import coggyImage from "../../image/coggy.png";

interface LanguageSelectViewProps {
  onGoBack: () => void;
  onLanguageSelect: (lang: string) => void;
}

function LanguageSelectView({ onGoBack, onLanguageSelect }: LanguageSelectViewProps) {
  const languages = [
    { name: "한국어", code: "ko", emoji: "🇰🇷" },
    { name: "English", code: "en", emoji: "🇺🇸" },
  ];

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
            언어 선택
          </h1>
          <img
            src={coggyImage}
            alt="Coggy"
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </div>

        {/* 언어 선택 리스트 */}
        <ul className="space-y-4">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => onLanguageSelect(lang.name)}
              className="cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm text-center font-semibold"
            >
              <span className="text-lg mr-2">{lang.emoji}</span>
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelectView;