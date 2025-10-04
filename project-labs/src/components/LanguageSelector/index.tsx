'use client';
import { useState, createContext,  ko: {
    start: '프로젝트 시작하기',
    services: '우리의 서비스',
    hero: {
      title: '미니앱 개발',
      subtitle: 'World ID 및 WorldCoin SDK 개발 전문가'
    }
  },ext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@worldcoin/mini-apps-ui-kit-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];

export const translations = {
  en: {
    start: 'Start your Project',
    services: 'Our Services',
    hero: {
      title: 'Mini Apps Development',
      subtitle: 'Experts in World ID and WorldCoin SDK development'
    }
  },
  es: {
    start: 'Comienza tu Proyecto',
    services: 'Nuestros Servicios',
    hero: {
      title: 'Desarrollo de Mini Apps',
      subtitle: 'Expertos en desarrollo con World ID y SDK de WorldCoin'
    }
  },
  th: {
    start: 'เริ่มโครงการของคุณ',
    services: 'บริการของเรา',
    hero: {
      title: 'พัฒนา Mini Apps',
      subtitle: 'ผู้เชี่ยวชาญด้านการพัฒนา World ID และ WorldCoin SDK'
    }
  },
  ja: {
    start: 'プロジェクトを開始',
    services: '私たちのサービス',
    hero: {
      title: 'ミニアプリ開発',
      subtitle: 'World IDとWorldCoin SDKの開発エキスパート'
    }
  },
  ko: {
    start: '프로ジェクトを開始',
    services: '우리の서비스',
    hero: {
      title: '미니앱 개발',
      subtitle: 'World ID 및 WorldCoin SDK 개발 전문가'
    }
  },
  pt: {
    start: 'Iniciar Projeto',
    services: 'Nossos Serviços',
    hero: {
      title: 'Desenvolvimento de Mini Apps',
      subtitle: 'Especialistas em desenvolvimento com World ID e SDK WorldCoin'
    }
  }
};

const LanguageContext = createContext({
  language: 'en',
  translations: translations.en,
  setLanguage: (_: string) => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    translations: translations[language as keyof typeof translations],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="!px-3 !py-1.5 font-medium"
      >
        <span className="mr-2">{currentLang.flag}</span>
        {currentLang.code.toUpperCase()}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 rounded-xl bg-gradient-to-br from-blue-600/80 to-gray-900/80 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left flex items-center hover:bg-white/10 transition-colors ${
                  currentLang.code === lang.code ? 'bg-white/20' : ''
                }`}
              >
                <span className="mr-3 text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};