import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo space - Left side */}
          <div className="flex items-center gap-4">
            {/* ĐẶT LOGO TRƯỜNG */}
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-xl transition-shadow p-2">
              <img
                src="/Logo_DAI_NAM.png"
                alt="Logo Đại học Đại Nam"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">
                Phân tích Cảm xúc AI
              </h1>
              <p className="text-sm text-blue-100 mt-1">
                Hệ thống phân tích cảm xúc văn bản tiếng Việt
              </p>
            </div>
          </div>

          {/* Navigation - Right side */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-orange-300 transition-colors border-b-2 border-transparent hover:border-orange-300 pb-1"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-orange-300 transition-colors border-b-2 border-transparent hover:border-orange-300 pb-1"
            >
              Giới thiệu
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-orange-300 transition-colors border-b-2 border-transparent hover:border-orange-300 pb-1"
            >
              Hướng dẫn
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-orange-300 transition-colors border-b-2 border-transparent hover:border-orange-300 pb-1"
            >
              Liên hệ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
