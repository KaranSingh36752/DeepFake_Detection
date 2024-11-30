import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              DeepFake Detect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              An open-source solution for detecting deepfake content using advanced AI technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/KaranSingh36752/DeepFake_Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/karansingh36752"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:ishpreet36752@gmail.com"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/license" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} DeepFake Detect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}