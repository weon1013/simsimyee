import { useState } from "react";
import coggyImage from "../../coggy.png"; // 이미지 경로 확인 (src/pages/PostPage/Login.tsx 기준)

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인 시도:", { email, password });
    // 여기에 실제 로그인 로직을 추가하세요. (API 호출 등)
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* 배경 애니메이션 - 코기 이미지 배경색과 유사하게 조정 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FFDAB9] via-[#FFDBA6] to-[#FFC580] animate-gradient-xy"></div>

      {/* 로그인 카드 컨테이너 */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md">
        {/* 상단 코기 이미지 및 로그인 카드 */}
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl w-full p-8 pt-0 transform transition-transform duration-500 hover:scale-[1.01] border border-opacity-10 border-orange-200">
          {/* 코기 이미지 섹션 - 카드의 일부처럼 보이도록 */}
          <div
            className="w-full h-40 bg-cover bg-center rounded-t-3xl -mt-0 mx-auto mb-6 flex items-center justify-center relative shadow-inner"
            style={{ backgroundImage: `url(${coggyImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          >
            {/* 이미지 위에 오버레이를 추가하여 텍스트 가독성 높이기 (선택 사항) */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent rounded-t-3xl"></div>
          </div>

          {/* 제목 */}
          <h1 className="text-4xl font-extrabold text-center text-orange-600 drop-shadow-sm mb-2">
            Coggy
          </h1>
          <p className="text-center text-gray-500 text-sm mt-2 mb-8">
            코기가 기다리고 있어요!
          </p>

          {/* 폼 */}
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
            {/* 버튼 그룹 */}
            <div className="flex space-x-3 pt-2">
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
                회원가입 🐾
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}