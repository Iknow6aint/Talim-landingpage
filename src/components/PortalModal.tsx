"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface Portal {
  name: string;
  url: string;
  description: string;
  icon: string;
}

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const portals: Portal[] = [
  {
    name: "Student",
    url: "https://students.mytalim.com",
    description: "Access your courses, assignments, and progress",
    icon: "🎓",
  },
  {
    name: "Teacher",
    url: "https://teachers.mytalim.com",
    description: "Manage classes, create content, and track student progress",
    icon: "👩‍🏫",
  },
  {
    name: "Parent",
    url: "https://parents.mytalim.com",
    description: "Monitor your child's academic progress and activities",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    name: "School Admin",
    url: "https://school.mytalim.com",
    description: "Oversee school operations and manage staff",
    icon: "🏫",
  },
];

const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const handlePortalClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Image
                    src="/talim.svg"
                    alt="Talim Logo"
                    width={32}
                    height={32}
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Choose Your Portal
                    </h2>
                    <p className="text-sm text-gray-600">
                      Select your role to access the appropriate dashboard
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Portal Options */}
              <div className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {portals.map((portal, index) => (
                    <motion.button
                      key={portal.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handlePortalClick(portal.url)}
                      className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {portal.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {portal.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {portal.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">
                    Need help? Contact{" "}
                    <a
                      href="mailto:support@mytalim.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@mytalim.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortalModal;
