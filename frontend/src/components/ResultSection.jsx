import React from "react";
import ResultDisplay from "./ResultDisplay";

function ResultSection({ result }) {
  return (
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
            Nhập văn bản và nhấn nút "Phân tích cảm xúc" để xem kết quả phân
            tích
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultSection;
