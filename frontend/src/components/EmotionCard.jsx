import React from "react";
import { getEmotionConfig } from "../utils/emotionConfig";

function EmotionCard({ label, confidence }) {
  const config = getEmotionConfig(label);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-300 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{config.emoji}</div>
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500 font-medium mb-1">
              Cảm xúc chính
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {config.labelVi}
            </h3>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs uppercase tracking-wide text-gray-500 font-medium mb-1">
            Độ tin cậy
          </div>
          <div className="text-4xl font-bold text-blue-600">
            {(confidence * 100).toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmotionCard;
