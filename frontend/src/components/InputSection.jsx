import React from "react";
import TextInput from "./TextInput";
import AnalyzeButton from "./AnalyzeButton";

function InputSection({
  text,
  setText,
  loading,
  error,
  handleAnalyze,
  handleClear,
}) {
  return (
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
        <AnalyzeButton onClick={handleAnalyze} loading={loading} />

        <button
          onClick={handleClear}
          disabled={loading}
          className="w-full px-6 py-3.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Xóa dữ liệu
        </button>
      </div>

      <div className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
        <h3 className="text-sm font-semibold text-orange-900 mb-2 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
  );
}

export default InputSection;
