import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  BarChart2, 
  Shield, 
  Code2, 
  Database, 
  Cloud,
  Cpu,
  Share2
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-Time Detection',
    description: 'Process and analyze images in real-time with our optimized deep learning model.'
  },
  {
    icon: BarChart2,
    title: 'High Accuracy',
    description: 'Achieve superior detection rates through our comprehensive training on diverse datasets.'
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description: 'All processing is done locally, ensuring your data remains private and secure.'
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Well-documented API and SDK for easy integration into your applications.'
  },
  {
    icon: Database,
    title: 'Extensive Training',
    description: 'Model trained on over 100,000 videos from multiple deepfake datasets.'
  },
  {
    icon: Cloud,
    title: 'Cloud Ready',
    description: 'Deploy and scale your detection capabilities with cloud infrastructure.'
  },
  {
    icon: Cpu,
    title: 'GPU Acceleration',
    description: 'Optimized for both CPU and GPU environments for maximum performance.'
  },
  {
    icon: Share2,
    title: 'Easy Integration',
    description: 'Simple REST API and multiple SDK options for seamless integration.'
  }
];

export function Features() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive set of tools and capabilities that make our deepfake detection system stand out
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}