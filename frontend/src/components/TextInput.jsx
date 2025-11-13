import React from "react";

function TextInput({ value, onChange, disabled }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Văn bản cần phân tích
      </label>
      <textarea
        className="w-full border-2 border-gray-300 rounded-lg p-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all resize-none disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-800"
        placeholder="Nhập văn bản tiếng Việt cần phân tích cảm xúc..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        rows={6}
        maxLength={512}
      />
      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        <span>Tối đa 512 ký tự</span>
        <span className={value.length > 512 ? "text-red-600 font-medium" : ""}>
          {value.length} / 512
        </span>
      </div>
    </div>
  );
}

export default TextInput;
