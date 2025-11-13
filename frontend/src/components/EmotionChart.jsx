import React from "react";
import { getEmotionConfig } from "../utils/emotionConfig";

function EmotionChart({ scores }) {
  const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);

  return (
    <div className="space-y-4">
      {sortedScores.map(([emotion, score]) => {
        const config = getEmotionConfig(emotion);
        const percentage = (score * 100).toFixed(1);

        return (
          <div key={emotion} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">{config.emoji}</span>
                <span className="text-sm font-medium text-gray-700">
                  {config.labelVi}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                {percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full transition-all duration-700"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: config.color,
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default EmotionChart;
