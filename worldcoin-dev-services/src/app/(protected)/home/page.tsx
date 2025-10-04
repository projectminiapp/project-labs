'use client';

import { motion } from 'framer-motion';
import { UserInfo } from '@/components/UserInfo';
import { ServiceCard } from '@/components/ServiceCard';

const services = [
  {
    title: "Desarrollo de Mini Apps",
    description: "Integración completa del SDK MiniKit",
    features: ["World ID Auth", "Wallet Integration", "Push Notifications", "Testing & Deploy"],
    icon: "📱"
  },
  {
    title: "Smart Contracts",
    description: "Desarrollo y deployment en World Chain",
    features: ["Solidity Development", "World Chain Deploy", "Sybil-Resistant Logic", "Gas Optimization"],
    icon: "⚡"
  },
  {
    title: "Auditoría de Seguridad",
    description: "Revisión completa de contratos",
    features: ["Security Analysis", "Vulnerability Testing", "Code Review", "Best Practices"],
    icon: "🔒"
  }
];

export default function ProtectedHome() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Fondo animado */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full mix-blend-overlay"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, Math.random() * 200 - 100, 0],
                  y: [0, Math.random() * 200 - 100, 0],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 400 + 200}px`,
                  height: `${Math.random() * 400 + 200}px`,
                  background: `radial-gradient(circle, rgba(147,197,253,0.15) 0%, rgba(147,197,253,0) 70%)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Header Fijo */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
        <UserInfo />
      </header>

      {/* Main Content con padding-top para el header fijo */}
      <main className="flex-1 overflow-y-auto container mx-auto px-4 pt-24 pb-8 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 mb-4 md:mb-6"
            animate={{
              backgroundPosition: ['0%', '100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-blue-200 max-w-xl md:max-w-2xl mx-auto"
          >
            Soluciones profesionales para el ecosistema Worldcoin
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-blue-200 text-sm"
          >
            © 2025 Project Labs. Powered by Worldcoin
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
