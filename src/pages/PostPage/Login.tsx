import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인 시도:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-orange-100">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl w-full max-w-md p-8">
        {/* 제목 */}
        <h1 className="text-3xl font-bold text-center text-orange-600">
          🐶 Coggy 로그인
        </h1>
        <p className="text-center text-gray-500 text-sm mt-2">
          웰시코기가 기다리고 있어요!
        </p>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-xl border border-yellow-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-xl border border-yellow-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
          >
            로그인 🐾
          </button>
        </form>

        {/* 회원가입 안내 */}
        <div className="flex justify-center mt-4 text-sm text-gray-600">
          <span>계정이 없으신가요?</span>
          <button className="ml-1 text-orange-500 hover:underline">
            회원가입
          </button>
        </div>

        {/* 코기 이미지 */}
        <div className="flex justify-center mt-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Welsh Corgi"
            className="w-20 h-20 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

