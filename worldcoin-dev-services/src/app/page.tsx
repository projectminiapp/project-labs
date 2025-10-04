'use client';

import { motion } from 'framer-motion';
import { AuthButton } from '../components/AuthButton';

function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 opacity-30">
          {/* Burbujas animadas */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-overlay"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                background: `radial-gradient(circle, rgba(147,197,253,0.15) 0%, rgba(147,197,253,0) 70%)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <BackgroundAnimation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 mb-6"
          animate={{
            backgroundPosition: ['0%', '100%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Project Labs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-blue-200 max-w-md md:max-w-2xl mx-auto mb-8 px-4"
        >
          Desarrollo profesional de Mini Apps & Smart Contracts en el ecosistema Worldcoin
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AuthButton />
        </motion.div>
      </motion.div>
      
      <footer className="absolute bottom-0 w-full border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-blue-200 text-sm">
            © 2025 Project Labs. Powered by Worldcoin
          </p>
        </div>
      </footer>
    </div>
  );
}
