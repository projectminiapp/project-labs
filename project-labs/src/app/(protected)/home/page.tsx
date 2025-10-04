'use client';
import { motion } from 'framer-motion';
import { UserInfo } from '@/components/UserInfo';
import { Page } from '@/components/PageLayout';
import { Button, TopBar } from '@worldcoin/mini-apps-ui-kit-react';
import '@/app/scroll.css';

const services = [
  {
    title: "Desarrollo de Mini Apps",
    description: "Desarrollo profesional de aplicaciones con el SDK de WorldCoin",
    features: ["Integración de World ID", "Autenticación con Wallet", "Diseño UI/UX", "Testing & Deploy"],
    icon: "🚀"
  },
  {
    title: "Smart Contracts",
    description: "Desarrollo e implementación de contratos inteligentes",
    features: ["Solidity Development", "World Chain Deploy", "Gas Optimization", "Security Audits"],
    icon: "⚡"
  },
  {
    title: "Consultoría Técnica",
    description: "Asesoría especializada en el ecosistema WorldCoin",
    features: ["Arquitectura", "Optimización", "Seguridad", "Best Practices"],
    icon: "💡"
  }
];

export default function Home() {
  return (
    <Page>
      <Page.Header className="p-0">
        <TopBar
          title="WorldCoin Dev Services"
          endAdornment={<UserInfo />}
        />
      </Page.Header>
      <Page.Main className="snap-container">
        {/* Hero Section */}
        <section className="snap-section h-[100dvh] flex flex-col justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
              Mini Apps Development
            </h1>
            <p className="text-gray-300 text-base mx-auto mb-8">
              Expertos en desarrollo con World ID y SDK de WorldCoin
            </p>
            <Button variant="primary" size="lg">Comienza tu Proyecto</Button>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="snap-section min-h-[100dvh] px-6 py-8">
          <h2 className="text-xl font-semibold mb-6">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-lg rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h3 className="text-lg font-medium">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <motion.span 
                        className="w-1 h-1 rounded-full bg-blue-500 mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </Page.Main>
    </Page>
  );
}
