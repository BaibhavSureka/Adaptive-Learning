import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DashboardPage = () => {
  const progressData = [
    { name: 'Completed', value: 75 },
    { name: 'Remaining', value: 25 },
  ];

  const COLORS = ['#4F46E5', '#E5E7EB'];

  const recentLessons = [
    { id: 1, title: 'Introduction to AI', progress: 100 },
    { id: 2, title: 'Machine Learning Basics', progress: 75 },
    { id: 3, title: 'Neural Networks', progress: 50 },
  ];

  const notifications = [
    { id: 1, message: 'New quiz available: AI Ethics', isNew: true },
    { id: 2, message: 'You have completed 75% of your course!', isNew: false },
    { id: 3, message: 'New lesson added: Deep Learning', isNew: true },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Your Progress</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={progressData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {progressData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
            You've completed 75% of your course!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Recent Lessons</h2>
          <ul className="space-y-4">
            {recentLessons.map((lesson) => (
              <li key={lesson.id} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{lesson.title}</span>
                <div className="w-1/3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${lesson.progress}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`flex items-center justify-between p-3 rounded-lg ${
                notification.isNew ? 'bg-indigo-100 dark:bg-indigo-900' : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              <span className={`text-gray-700 dark:text-gray-300 ${notification.isNew ? 'font-semibold' : ''}`}>
                {notification.message}
              </span>
              {notification.isNew && (
                <span className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">New</span>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default DashboardPage;

