from flask import Blueprint, request, jsonify, current_app
from utils.validators import validate_text_input

emotion_bp = Blueprint('emotion', __name__)

@emotion_bp.route('/analyze', methods=['POST'])
def analyze_emotion():
    """
    API endpoint để phân tích cảm xúc
    
    Request body:
        {
            "text": "string"
        }
    
    Returns:
        {
            "label": "string",
            "confidence": float,
            "all_scores": {}
        } 
    """
    try:
        # Get and validate input
        data = request.get_json()
        is_valid, error_msg = validate_text_input(data)
        
        if not is_valid:
            return jsonify({"error": error_msg}), 400
        
        text = data.get("text", "").strip()
        
        # Predict
        model_service = current_app.model_service
        result = model_service.predict(text)
        
        return jsonify({
            "success": True,
            "data": result
        }), 200
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@emotion_bp.route('/batch-analyze', methods=['POST'])
def batch_analyze_emotion():
    """
    API endpoint để phân tích nhiều text cùng lúc
    
    Request body:
        {
            "texts": ["string1", "string2", ...]
        }
    """
    try:
        data = request.get_json()
        texts = data.get("texts", [])
        
        if not texts or not isinstance(texts, list):
            return jsonify({"error": "Missing or invalid 'texts' field"}), 400
        
        if len(texts) > 100:
            return jsonify({"error": "Maximum 100 texts per request"}), 400
        
        # Predict
        model_service = current_app.model_service
        results = model_service.batch_predict(texts)
        
        return jsonify({
            "success": True,
            "data": results
        }), 200
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@emotion_bp.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "service": "emotion-analysis"
    }), 200