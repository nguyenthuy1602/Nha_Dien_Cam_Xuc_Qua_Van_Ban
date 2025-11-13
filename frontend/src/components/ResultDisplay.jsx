import React from "react";
import EmotionCard from "./EmotionCard";
import EmotionChart from "./EmotionChart";

function ResultDisplay({ result }) {
  if (!result || !result.data) return null;

  const { key, confidence, all_scores } = result.data;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">
          Kết quả phân tích
        </h2>

        <EmotionCard label={key} confidence={confidence} />

        <div className="mt-6 bg-white border-2 border-gray-200 rounded-lg p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4 border-l-4 border-orange-500 pl-3">
            Phân tích chi tiết
          </h3>
          <EmotionChart scores={all_scores} />
        </div>
      </div>
    </div>
  );
}
export default ResultDisplay;
