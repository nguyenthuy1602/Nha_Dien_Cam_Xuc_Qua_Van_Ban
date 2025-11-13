// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  TIMEOUT: 30000, // 30 seconds
};

// Text Input Configuration
export const TEXT_INPUT_CONFIG = {
  MAX_LENGTH: 512,
  MIN_LENGTH: 1,
  PLACEHOLDER: "Ví dụ: Hôm nay tôi rất vui vì được gặp bạn bè...",
};

// Emotion Labels (English to Vietnamese)
export const EMOTION_LABELS = {
  love: "Yêu thương",
  joy: "Vui vẻ",
  anger: "Tức giận",
  fear: "Sợ hãi",
  sadness: "Buồn bã",
  surprise: "Ngạc nhiên",
  disgust: "Khó chịu",
};

// UI Messages
export const UI_MESSAGES = {
  EMPTY_TEXT: "Vui lòng nhập văn bản",
  ANALYZING: "Đang phân tích...",
  ERROR_GENERIC: "Đã xảy ra lỗi khi phân tích",
  SUCCESS: "Phân tích thành công!",
};
