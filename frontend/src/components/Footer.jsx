import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                AI Learn
              </Link>
            </motion.div>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              Empowering learners with AI-driven personalized education.
            </p>
            <div className="flex space-x-6">
              {['Facebook', 'Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-gray-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social.toLowerCase()}`}></i>
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  {['Personalized Learning', 'AI Tutoring', 'Progress Tracking', 'Interactive Quizzes'].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {['Pricing', 'Documentation', 'Guides', 'API Status'].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {['About', 'Blog', 'Jobs', 'Press', 'Partners'].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {['Privacy', 'Terms', 'Cookie Policy', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 AI Learn, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

