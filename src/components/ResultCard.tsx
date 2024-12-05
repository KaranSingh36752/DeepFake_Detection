import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface ResultCardProps {
  isReal: boolean;
  confidence: number;
  isLoading: boolean;
}

export function ResultCard({ isReal, confidence, isLoading }: ResultCardProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-xl mx-auto mt-8 p-6 rounded-lg shadow-md ${
        isReal
          ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
          : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
      }`}
    >
      <div className="flex items-center space-x-3">
        {isReal ? (
          <CheckCircle className="w-8 h-8 text-green-500 dark:text-green-400" />
        ) : (
          <AlertTriangle className="w-8 h-8 text-red-500 dark:text-red-400" />
        )}
        <div>
          <h3
            className={`text-lg font-semibold ${
              isReal ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
            }`}
          >
            {isReal ? 'Image appears to be authentic' : 'Potential deepfake detected'}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Confidence: {(confidence * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
}
