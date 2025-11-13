from flask import Flask
from flask_cors import CORS
from config import Config
from routes.emotion_routes import emotion_bp
from services.model_service import ModelService

def create_app():
    """Factory pattern để tạo Flask app"""
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Enable CORS
    CORS(app)
    
    # Load model khi khởi động
    print("🔄 Đang khởi tạo model service...")
    model_service = ModelService(Config.MODEL_PATH)
    app.model_service = model_service
    print("✅ Model service đã sẵn sàng!")
    
    # Register blueprints
    app.register_blueprint(emotion_bp, url_prefix='/api')
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(
        debug=app.config['DEBUG'],
        host=app.config['HOST'],
        port=app.config['PORT']
    )