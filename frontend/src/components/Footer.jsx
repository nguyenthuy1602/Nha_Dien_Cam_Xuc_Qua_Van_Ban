import React from "react";

function Footer() {
  return (
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
            <p className="text-sm text-gray-400">Email: support@example.com</p>
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
  );
}

export default Footer;
