import { useState, useCallback } from "react";
import { analyzeEmotion } from "../services/api";

/**
 * Custom hook để quản lý logic phân tích cảm xúc
 */
export const useEmotion = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = useCallback(async () => {
    if (!text.trim()) {
      setError("Vui lòng nhập văn bản");
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const data = await analyzeEmotion(text);
      setResult(data);
    } catch (err) {
      setError(err.message || "Đã xảy ra lỗi khi phân tích");
    } finally {
      setLoading(false);
    }
  }, [text]);

  const clear = useCallback(() => {
    setText("");
    setResult(null);
    setError(null);
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return {
    text,
    setText,
    result,
    loading,
    error,
    analyze,
    clear,
    reset,
  };
};
