'use client';
import { motion } from 'framer-motion';
import { UserInfo } from '@/components/UserInfo';
import { Page } from '@/components/PageLayout';
import { Button, TopBar } from '@worldcoin/mini-apps-ui-kit-react';
import { LanguageSelector, useLanguage } from '@/components/LanguageSelector';
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
  const { translations } = useLanguage();

  return (
    <Page className="page-gradient">
      <Page.Header className="p-0">
        <TopBar
          title=""
          startAdornment={<UserInfo />}
          endAdornment={<LanguageSelector />}
          className="header-fixed"
        />
      </Page.Header>
      <Page.Main className="snap-container pt-16">
        {/* Hero Section */}
        <section className="snap-section h-[100dvh] flex flex-col justify-center px-6">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-white/5" />
            <div className="absolute inset-0 backdrop-blur-3xl" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white mb-4">
              {translations.hero.title}
            </h1>
            <p className="text-gray-300 text-base mx-auto mb-8">
              {translations.hero.subtitle}
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Iniciar proyecto')}
            >
              {translations.start}
            </Button>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="snap-section min-h-[100dvh] px-6 py-8">
          <h2 className="text-xl font-semibold mb-6">{translations.services}</h2>
          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-black/20 hover:bg-black/30 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform">{service.icon}</span>
                  <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">{service.title}</h3>
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
