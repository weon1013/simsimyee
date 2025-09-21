import React, { useState } from "react";
import coggyImage from "../../image/coggy.png";

interface LoginPageProps {
  onNavigate: (view: "studentAuth" | "signUp" | "settings") => void;
}

function LoginPage({ onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인 시도:", { email, password });
    // TODO: 여기에 실제 로그인 로직을 추가하세요. (API 호출 등)
  };

  return (
    <div className="relative z-10 flex flex-col items-center w-full max-w-md">
      {/* 상단 설정 아이콘 버튼 */}
      <button
        onClick={() => onNavigate("settings")}
        className="absolute top-4 right-4 z-20 p-2 rounded-full text-gray-400 hover:text-orange-600 hover:bg-white/50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-200"
        aria-label="Settings"
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.941 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.941 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.941-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.941-1.543.82-3.31 2.37-2.37.996.608 2.296.608 3.292 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {/* 상단 코기 이미지 및 로그인 카드 */}
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl w-full p-8 pt-0 transform transition-transform duration-500 border border-opacity-10 border-orange-200">
        <div
          className="w-full h-40 bg-cover bg-center rounded-t-3xl -mt-0 mx-auto mb-6 flex items-center justify-center relative shadow-inner"
          style={{
            backgroundImage: `url(${coggyImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent rounded-t-3xl"></div>
        </div>

        <h1 className="text-4xl font-extrabold text-center text-orange-600 drop-shadow-sm mb-2">
          Coggy
        </h1>
        <p className="text-center text-gray-500 text-sm mt-2 mb-8">
          코기가 기다리고 있어요!
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-5">
          <div>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm transition-all duration-300"
            />
          </div>
          <div className="flex space-x-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              로그인 🐾
            </button>
            <button
              type="button"
              onClick={() => onNavigate("signUp")}
              className="flex-1 py-3 rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-all duration-300 font-semibold shadow-md"
            >
              회원가입 🐾
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;