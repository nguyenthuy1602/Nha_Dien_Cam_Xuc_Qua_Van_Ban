import os

class Config:
    """Cấu hình cho Flask application"""
    
    # Flask config
    DEBUG = True
    HOST = '0.0.0.0'
    PORT = 5000
    
    # Model config
    MODEL_PATH = r"D:\ChuyenDoiSo\phan_tich_cam_xuc"
    
    # Emotion labels
    EMOTION_LABELS = ["love", "joy", "anger", "fear", "sadness", "surprise", "disgust"]
    
    # API config
    MAX_TEXT_LENGTH = 512
    DEFAULT_CONFIDENCE_THRESHOLD = 0.5