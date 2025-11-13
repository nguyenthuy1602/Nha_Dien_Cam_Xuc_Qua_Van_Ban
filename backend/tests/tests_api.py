import unittest
import json
from app import create_app

class EmotionAPITestCase(unittest.TestCase):
    """Test cases for Emotion Analysis API"""
    
    def setUp(self):
        """Set up test client"""
        self.app = create_app()
        self.client = self.app.test_client()
        self.app.config['TESTING'] = True
    
    def test_health_check(self):
        """Test health check endpoint"""
        response = self.client.get('/api/health')
        data = json.loads(response.data)
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['status'], 'healthy')
    
    def test_analyze_emotion_success(self):
        """Test successful emotion analysis"""
        payload = {
            'text': 'Hôm nay tôi rất vui!'
        }
        response = self.client.post(
            '/api/analyze',
            data=json.dumps(payload),
            content_type='application/json'
        )
        data = json.loads(response.data)
        
        self.assertEqual(response.status_code, 200)
        self.assertTrue(data['success'])
        self.assertIn('label', data['data'])
        self.assertIn('confidence', data['data'])
    
    def test_analyze_emotion_empty_text(self):
        """Test with empty text"""
        payload = {'text': ''}
        response = self.client.post(
            '/api/analyze',
            data=json.dumps(payload),
            content_type='application/json'
        )
        
        self.assertEqual(response.status_code, 400)
    
    def test_analyze_emotion_missing_text(self):
        """Test with missing text field"""
        payload = {}
        response = self.client.post(
            '/api/analyze',
            data=json.dumps(payload),
            content_type='application/json'
        )
        
        self.assertEqual(response.status_code, 400)
    
    def test_batch_analyze(self):
        """Test batch analysis"""
        payload = {
            'texts': ['Tôi vui', 'Tôi buồn']
        }
        response = self.client.post(
            '/api/batch-analyze',
            data=json.dumps(payload),
            content_type='application/json'
        )
        data = json.loads(response.data)
        
        self.assertEqual(response.status_code, 200)
        self.assertTrue(data['success'])
        self.assertEqual(len(data['data']), 2)

if __name__ == '__main__':
    unittest.main()