// src/App.tsx
import React, { useState } from "react";
import LoginPage from "./pages/PostPage/LoginPage";
import SettingsPage from "./pages/PostPage/SettingsPage";
import LanguageSelectView from "./pages/PostPage/LanguageSelectView";
import StudentAuthView from "./pages/PostPage/StudentAuthView";
import SignUpPage from "./pages/PostPage/SignUpPage";
import ProfilePage from "./pages/PostPage/ProfilePage";
import PasswordChangePage from "./pages/PostPage/PasswordChangePage"; // PasswordChangePage 임포트

function App() {
  const [view, setView] = useState("login");
  const [selectedLanguage, setSelectedLanguage] = useState("한국어");

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    console.log(`언어가 ${language}로 변경되었습니다.`);
    setView("settings");
  };

  const renderView = () => {
    switch (view) {
      case "login":
        return <LoginPage onNavigate={setView} />;
      case "settings":
        return <SettingsPage onGoBack={() => setView("login")} onNavigate={setView} />;
      case "languageSelect":
        return <LanguageSelectView onGoBack={() => setView("settings")} onLanguageSelect={handleLanguageSelect} />;
      case "studentAuth":
        return <StudentAuthView onGoBack={() => setView("login")} />;
      case "signUp":
        return <SignUpPage onGoBack={() => setView("login")} onNavigate={setView} />;
      case "profile":
        return <ProfilePage onGoBack={() => setView("settings")} />;
      case "passwordChange": // 새로운 case 추가
        return <PasswordChangePage onGoBack={() => setView("settings")} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FFDAB9] via-[#FFDBA6] to-[#FFC580] animate-gradient-xy"></div>
      {/* 뷰 렌더링 */}
      {renderView()}
    </div>
  );
}

export default App;