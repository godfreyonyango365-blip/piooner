"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Mission",
    content:
      "To preserve, share, and teach the historic foundations of the Seventh-day Adventist Church by highlighting the lives, teachings, and contributions of its pioneers, inspiring faith, unity, and commitment to God’s cause.",
  },
  {
    title: "Vision",
    content:
      "To be a leading platform that brings the stories of Adventist pioneers to life, connecting past lessons with present faith, and fostering a deeper understanding of gospel order, church organization, and spiritual heritage.",
  },
  {
    title: "History",
    content:
      "Pioneers Footprints was founded to document and share the remarkable journey of the early Seventh-day Adventist Church. Through storytelling, historical research, and visual media, the platform explores the lives of key figures such as Joseph Bates, William Miller, Ellen White, Hiram Edson, and John Nevins Andrews. It also highlights foundational documents like the Seventh-day Adventist Constitution of 1863, showing how order, unity, and faith shaped the church into a worldwide movement. Today, Pioneers Footprints continues to inspire and educate by preserving the legacy of these devoted pioneers and their enduring message of truth.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-24 px-6 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100">
      <div className="max-w-5xl mx-auto space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg md:text-xl leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
