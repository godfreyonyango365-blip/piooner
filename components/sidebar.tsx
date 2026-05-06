"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Briefcase, BookOpen, House, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HandCoinsIcon } from "lucide-react";

const sidebarItems = [
  { name: "Home", href: "/", icon: House },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Publications", href: "/publications", icon: BookOpen },
  { name: "Team", href: "/team", icon: Users },
  { name: "Support", href: "/donate", icon: HandCoinsIcon  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar - Left side, half screen width */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-1/2 bg-gradient-to-br from-blue-700/95 via-blue-600/95 to-blue-800/95 z-[60] shadow-2xl p-6 flex flex-col border-r border-blue-500/20 max-w-xs"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between mb-8 border-b border-blue-400/20 pb-4">
              <span className="font-bold text-lg text-white">
                PIONEERS FOOTPRINTS
              </span>
              <button onClick={onClose} className="text-white hover:bg-blue-500/20 p-2 rounded-lg transition">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-4 flex-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 p-4 rounded-xl transition ${
                      isActive
                        ? "bg-white/20 text-white border border-white/30"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer Info */}
            <div className="border-t border-blue-400/20 pt-4 mt-auto">
              <a
                href="mailto:pioneersfootprints1844@gmail.com"
                className="text-sm text-blue-100 hover:text-white transition block truncate"
              >
                pioneersfootprints1844@gmail.com
              </a>
              <a
                href="tel:+254742767609"
                className="text-sm text-blue-100 hover:text-white transition block mt-2"
              >
                +254742767609
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
