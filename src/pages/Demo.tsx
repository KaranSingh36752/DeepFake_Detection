import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImageUploader } from "../components/ImageUploader";
import { ResultCard } from "../components/ResultCard";
import { analyzeImage } from "../services/api";
import toast from "react-hot-toast";
import { Info } from "lucide-react";

export function Demo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    isReal: boolean;
    confidence: number;
  } | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    setSelectedImage(URL.createObjectURL(file)); // Show a preview of the selected image
    setResult(null); // Clear previous results
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first");
      return;
    }

    try {
      setIsAnalyzing(true); // Set loading state
      toast.loading("Analyzing image...");
      const response = await analyzeImage(selectedFile); // Call the API

      // Assuming the API response contains `deepfake` and `confidence` fields
      const { deepfake, confidence } = response;
      setResult({
        isReal: !deepfake, // If `deepfake` is true, it's not authentic
        confidence,
      });
      toast.dismiss(); // Dismiss loading toast
      toast.success("Analysis complete!");
    } catch (error) {
      toast.dismiss();
      toast.error("Error analyzing image. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsAnalyzing(false); // Reset loading state
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Try Our Deepfake Detector
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Upload an image to analyze whether it's authentic or potentially
            manipulated
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8"
          >
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                  How it works
                </h4>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-200">
                  Our model analyzes facial features and image patterns to
                  detect potential manipulation. For best results, use clear,
                  front-facing photos with good lighting.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ImageUploader
              onImageSelect={handleImageSelect}
              selectedImage={selectedImage}
            />

            {selectedImage && (
              <div className="text-center mt-8">
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-900`}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                </button>
              </div>
            )}

            {(isAnalyzing || result) && (
              <ResultCard
                isReal={result?.isReal ?? false}
                confidence={result?.confidence ?? 0}
                isLoading={isAnalyzing}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
