"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "pioneersfootprints1844@gmail.com",
      href: "mailto:pioneersfootprints1844@gmail.com",
    },
    {
      icon: FaPhone,
      label: "+254742767609",
      href: "tel:+254742767609",
    },
    { icon: FaMapMarkerAlt, label: "Kenya" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1440 80" className="w-full h-auto">
          <path
            fill="currentColor"
            className="text-gray-50"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Branding Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-5">
              Pioneers
              <span className="text-blue-400 ml-55">Footprints</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Preserving the legacy and teachings of our spiritual pioneers — inspiring faith, unity, and commitment to God’s cause.
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-xl" />
              </a>

              <a
                href="https://youtube.com/@PioneersFootprints?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Useful Sites */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <h2 className="text-lg font-semibold mb-2 mt-10">
              Pioneers Footprints Reference Hub
            </h2>

            <p className="text-gray-400 text-sm mb-10">
              A curated gateway of trusted study platforms and historical references supporting biblical research, pioneer heritage, and ministry growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl">
              {[
                { name: "EGW Writings", url: "https://egwwritings.org/" },
                { name: "Sunday Law", url: "https://SundayLaw.com/" },
                { name: "Young Evangelists Ministry", url: "https://youngevangelists.vercel.app/" },
                { name: "Advent AI", url: "https://adventai.app/" },
                { name: "Advent Nurutech", url: "https://www.adventnurutech.xyz/" },
                { name: "Nuru Shop", url: "https://nurushop.co.ke/" },
              ].map((site, index) => (
                <a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-gray-800/40 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <FaGlobe className="text-sm" />
                    </div>

                    <span className="text-gray-300 group-hover:text-white text-sm">
                      {site.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mt-10">Get In Touch</h3>

            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 flex-shrink-0 mt-0.5">
                    {React.createElement(item.icon, {
                      className: "text-sm",
                    })}
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* YouTube Card */}
          <a
            href="https://youtube.com/@PioneersFootprints?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-2xl bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg group"
          >
            <div className="flex items-center gap-3">
              <FaYoutube className="text-white text-2xl" />
              <div>
                <p className="text-white font-semibold">Visit our YouTube</p>
                <p className="text-white/80 text-xs">
                  Watch sermons & teachings
                </p>
              </div>
            </div>
            <span className="text-white group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/254742767609?text=Hello%20Pioneers%20Footprints"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-2xl bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg group"
          >
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-white text-2xl" />
              <div>
                <p className="text-white font-semibold">Chat on WhatsApp</p>
                <p className="text-white/80 text-xs">
                  Instant ministry support
                </p>
              </div>
            </div>
            <span className="text-white group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </a>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-400 text-center md:text-left">
              <p>© {currentYear} Pioneers Footprints. All Rights Reserved.</p>
            </div>

            <div className="text-gray-500 text-center md:text-right">
              <p>
                Designed & powered by{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Advent Pioneers Tech
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
