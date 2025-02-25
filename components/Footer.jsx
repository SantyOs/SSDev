"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-10 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-4xl border-b-2 py-10 text-center">
        <Link href="/#contact">
          <motion.h2
            className="text-lg font-medium text-gray-500 hover:underline tracking-wide"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Interado en contrarnos?
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mt-3 text-gray-900 hover:underline flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Contáctanos!
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-4xl ml-3 text-blue-600" />
          </motion.h1>
        </Link>
      </div>
      <footer className="flex justify-center items-center py-5">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-800">SSDEV</span>
        </p>
      </footer>
    </div>
  );
}
