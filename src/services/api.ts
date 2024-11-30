import axios from 'axios';

// Using DeepWare API as an example
const API_KEY = 'demo'; // Replace with your actual API key
const API_URL = 'https://api.deepware.ai/';

export async function analyzeImage(imageFile: File) {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await axios.post(`${API_URL}/analyze`, formData, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
}