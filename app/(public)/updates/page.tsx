"use client";

import { motion } from "framer-motion";

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 px-4 py-12 transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Updates & News
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Stay informed with the latest from Pioneers Footprints
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            Updates section coming soon. Check back for exciting news and announcements!
          </p>
        </motion.div>
      </div>
    </main>
  );
}
