const API_BASE_URL = "http://localhost:5000/api";

/**
 * Phân tích cảm xúc từ text
 * @param {string} text - Text cần phân tích
 * @returns {Promise<Object>} - Kết quả phân tích
 */
export const analyzeEmotion = async (text) => {
  try {
    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Lỗi khi gọi API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Phân tích nhiều text cùng lúc
 * @param {string[]} texts - Mảng các text cần phân tích
 * @returns {Promise<Object>} - Kết quả phân tích
 */
export const batchAnalyzeEmotion = async (texts) => {
  try {
    const response = await fetch(`${API_BASE_URL}/batch-analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ texts }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Lỗi khi gọi API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Kiểm tra health của API
 * @returns {Promise<Object>} - Trạng thái health
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error("Health check failed:", error);
    throw error;
  }
};
