import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
  selectedImage: string | null;
}

export function ImageUploader({ onImageSelect, selectedImage }: ImageUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onImageSelect(acceptedFiles[0]);
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
    multiple: false,
  });

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
        } dark:bg-gray-800`}
      >
        <input {...getInputProps()} aria-label="Upload image" />
        {selectedImage ? (
          <div className="space-y-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-64 mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Click or drag to replace the image
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500" />
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                {isDragActive ? 'Drop the image here' : 'Drag and drop an image here, or click to select'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Supports JPG, JPEG, PNG</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
