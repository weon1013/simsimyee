
import React from 'react';
import LoginForm from './LoginForm'; // LoginForm 컴포넌트를 불러옵니다.
import coggyCharacter from '../assets/coggy_character.png'; // 코기 캐릭터 이미지 경로를 설정하세요.

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        {/* 'Coggy' 캐릭터 이미지 */}
        <div className="flex justify-center mb-6">
          <img
            src={coggyCharacter}
            alt="Coggy Character"
            className="w-40 h-auto"
          />
        </div>

        {/* 환영 메시지 */}
        <h1 className="text-2xl font-bold text-center text-primary-dark mb-2">
          반가워요! 'Coggy'에 오신 것을 환영합니다.
        </h1>
        <p className="text-center text-gray-500 mb-6">
          평택대학교 정보통신학과 학생들을 위한 맞춤형 챗봇, 코기입니다.
        </p>

        {/* LoginForm 컴포넌트 */}
        <LoginForm />
        
        {/* 회원가입 및 비밀번호 찾기 링크 */}
        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-primary-main hover:underline">
            비밀번호 찾기
          </a>
          <a href="#" className="text-primary-main hover:underline">
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;