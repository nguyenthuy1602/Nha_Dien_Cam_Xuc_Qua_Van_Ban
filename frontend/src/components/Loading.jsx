import React from "react";

function Loading({ message = "Đang tải..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-600 font-semibold text-lg">{message}</p>
    </div>
  );
}

export default Loading;
