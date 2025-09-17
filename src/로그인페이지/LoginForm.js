import React, { useState } from 'react';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // 실제 API 호출 로직을 여기에 추가하세요.
    // try {
    //   const response = await fetch('YOUR_LOGIN_API_ENDPOINT', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ userId, password }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     // 로그인 성공! 토큰 저장 및 페이지 이동
    //     localStorage.setItem('token', data.token);
    //     alert('로그인 성공!');
    //     // navigate('/main');
    //   } else {
    //     setError(data.message || '로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
    //   }
    // } catch (err) {
    //   setError('서버와 통신할 수 없습니다.');
    // }

    // 예시: API 호출 대신 1초 후 로그인 성공 처리
    setTimeout(() => {
      if (userId === 'admin' && password === '1234') {
        alert('로그인 성공!');
      } else {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 에러 메시지 */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 text-sm" role="alert">
          <p>{error}</p>
        </div>
      )}

      {/* 아이디 입력 필드 */}
      <div>
        <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
          학번 또는 이메일
        </label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm"
          placeholder="ex. 2024123456"
        />
      </div>

      {/* 비밀번호 입력 필드 */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm"
          placeholder="비밀번호를 입력하세요."
        />
      </div>

      {/* 로그인 버튼 */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-main hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-main"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
3. Tailwind CSS 설정 (tailwind.config.js)
테마 색상을 정의하여 일관된 디자인을 유지합니다. primary-main과 primary-dark 색상은 'Coggy' 프로젝트의 주요 색상으로 사용됩니다.

JavaScript

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-main': '#4F46E5', // 예시: 보라색
        'primary-dark': '#4338CA', // 예시: 더 진한 보라색
      },
    },
  },
  plugins: [],
}