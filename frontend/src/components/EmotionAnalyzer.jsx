// EmotionAnalyzer.js (Cách làm mới, đã dọn dẹp)
import { useEmotion } from "../hooks/useEmotion"; // Import hook vào
import TextInput from "./TextInput";
import AnalyzeButton from "./AnalyzeButton";
import ResultDisplay from "./ResultDisplay";

function EmotionAnalyzer() {
  const { text, setText, result, loading, error, analyze, clear } =
    useEmotion();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo space - Left side */}
            <div className="flex items-center gap-4">
              {/* ⭐ NƠI BẠN ĐẶT LOGO TRƯỜNG */}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input với accent cam */}
          <div className="bg-white border-l-4 border-orange-500 rounded-lg shadow-md p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
              Nhập dữ liệu
            </h2>

            <TextInput value={text} onChange={setText} disabled={loading} />

            {error && (
              <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="mt-6 space-y-3">
              <AnalyzeButton onClick={analyze} loading={loading} />
              <button
                onClick={clear}
                disabled={loading}
                className="w-full px-6 py-3.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Xóa dữ liệu
              </button>
            </div>

            <div className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
              <h3 className="text-sm font-semibold text-orange-900 mb-2 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Lưu ý
              </h3>
              <ul className="text-xs text-orange-800 space-y-1">
                <li>• Văn bản phải từ 1-512 ký tự</li>
                <li>• Hỗ trợ tiếng Việt có dấu</li>
                <li>• Thời gian phân tích: 1-2 giây</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Result với accent xanh */}
          <div className="bg-white border-l-4 border-blue-600 rounded-lg shadow-md p-8">
            {result ? (
              <ResultDisplay result={result} />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full animate-pulse"></div>
                  <svg
                    className="relative w-32 h-32 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-base font-semibold text-gray-600">
                  Chưa có kết quả
                </p>
                <p className="text-sm text-gray-400 mt-2 max-w-xs">
                  Nhập văn bản và nhấn nút "Phân tích cảm xúc" để xem kết quả
                  phân tích
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h3 className="text-white font-semibold mb-3 border-l-4 border-orange-500 pl-3">
                Về chúng tôi
              </h3>
              <p className="text-sm text-gray-400">
                Hệ thống phân tích cảm xúc sử dụng công nghệ AI và Machine
                Learning tiên tiến
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 border-l-4 border-blue-500 pl-3">
                Liên hệ
              </h3>
              <p className="text-sm text-gray-400">
                Email: support@example.com
              </p>
              <p className="text-sm text-gray-400 mt-1">Hotline: 1900 xxxx</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 border-l-4 border-orange-500 pl-3">
                Liên kết
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Hệ thống Phân tích Cảm xúc AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default EmotionAnalyzer;
