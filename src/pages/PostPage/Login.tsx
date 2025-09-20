import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인 시도:", { email, password });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 animate-gradient-xy"></div>
      
      {/* 로그인 카드 컨테이너 */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 로그인 카드 */}
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl w-full max-w-md p-8 transform transition-transform duration-500 hover:scale-[1.01]">
          {/* 제목 */}
          <h1 className="text-4xl font-extrabold text-center text-orange-600 drop-shadow-sm">
            🐶 Coggy 로그인
          </h1>
          <p className="text-center text-gray-500 text-sm mt-2">
            웰시코기가 기다리고 있어요!
          </p>

          {/* 폼 */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
            {/* 버튼 그룹 */}
            <div className="flex space-x-3">
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                로그인 🐾
              </button>
              <button
                type="button"
                className="flex-1 py-3 rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-all duration-300 font-semibold shadow-md"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>

        {/* 코기 이미지 */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Welsh Corgi"
          className="w-64 h-auto mt-10 drop-shadow-2xl z-0 animate-bounce-slow"
        />
      </div>
    </div>
  );
}