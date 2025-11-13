from typing import Tuple
from config import Config

def validate_text_input(data: dict) -> Tuple[bool, str]:
    """
    Validate text input từ request
    
    Args:
        data: Dictionary từ request JSON
        
    Returns:
        Tuple (is_valid, error_message)
    """
    if not data:
        return False, "Request body is required"
    
    text = data.get("text")
    
    if text is None:
        return False, "Missing 'text' field"
    
    if not isinstance(text, str):
        return False, "'text' must be a string"
    
    if not text.strip():
        return False, "Text cannot be empty"
    
    if len(text) > Config.MAX_TEXT_LENGTH:
        return False, f"Text exceeds maximum length of {Config.MAX_TEXT_LENGTH} characters"
    
    return True, None