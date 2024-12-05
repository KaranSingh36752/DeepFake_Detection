import React, { useState } from 'react';
import { ResultCard } from './ResultCard'; // Adjust the import path if needed
import { analyzeImage } from '../services/api'; // Adjust the import path if needed

const ImageAnalyzer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ isReal: boolean; confidence: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyzeImage = async (image: File | URL) => {
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await analyzeImage(image);
      const confidence = response.type.deepfake;

      setResult({
        isReal: confidence < 0.5, // Real if confidence is less than 0.5
        confidence: confidence,
      });
    } catch (err: any) {
      console.error("Error analyzing image:", err);
      setError("Failed to analyze the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Deepfake Image Analyzer</h1>

      {/* Image Input */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              handleAnalyzeImage(file);
            }
          }}
          className="block w-full text-sm text-gray-600 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:text-sm file:bg-gray-200 dark:file:bg-gray-800 file:text-gray-700 dark:file:text-gray-300 hover:file:bg-gray-300 dark:hover:file:bg-gray-700"
        />
      </div>

      {/* Example Button for URL Input */}
      <button
        onClick={() => handleAnalyzeImage(new URL('https://example.com/image.jpg'))}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Analyze Image
      </button>

      {/* Loading State */}
      {isLoading && <ResultCard isLoading={true} isReal={false} confidence={0} />}

      {/* Display Result */}
      {result && (
        <ResultCard
          isLoading={false}
          isReal={result.isReal}
          confidence={result.confidence}
        />
      )}

      {/* Display Error */}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default ImageAnalyzer;
