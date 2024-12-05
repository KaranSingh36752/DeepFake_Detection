import axios from 'axios';

const API_USER = '321887342'; // Replace with your Sightengine API user
const API_SECRET = 'NTBZuqM2dQaEXQbWZZMoHHT78MYwW2ZS'; // Replace with your Sightengine API secret
const API_URL = 'https://api.sightengine.com/1.0/check.json';

export async function analyzeImage(imageFile: File | URL): Promise<any> {
  try {
    if (imageFile instanceof URL) {
      // Option 1: Analyze using an image URL
      console.log("Requesting analysis using URL:", imageFile.toString()); // Log the request URL

      const response = await axios.get(API_URL, {
        params: {
          url: imageFile.toString(),
          models: "deepfake",
          api_user: API_USER,
          api_secret: API_SECRET,
        },
      });

      console.log("API Response (URL Analysis):", response.data); // Log API response
      return response.data;

    } else {
      // Option 2: Analyze by uploading the raw image file
      const formData = new FormData();
      formData.append("media", imageFile);
      formData.append("models", "deepfake");
      formData.append("api_user", API_USER);
      formData.append("api_secret", API_SECRET);

      console.log("Requesting analysis with form data:", formData); // Log form data

      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Explicitly set the header for browsers
        },
      });

      console.log("API Response (File Upload):", response.data); // Log API response
      return response.data;
    }
  } catch (error: any) {
    if (error.response) {
      console.error("API Error Response:", error.response.data); // Log API error response
    } else {
      console.error("General Error:", error.message); // Log general errors
    }
    throw error; // Rethrow the error for handling in the caller
  }
}


