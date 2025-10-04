'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../providers/auth';
import { useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' }
];

export function UserInfo() {
  const { user } = useAuth();
  const [currentLang, setCurrentLang] = useState('es');
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    // Recuperar el idioma guardado
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);
    localStorage.setItem('language', langCode);
  };

  const currentLanguage = SUPPORTED_LANGUAGES.find(lang => lang.code === currentLang);

  if (!user) return null;

  return (
    <div className="container mx-auto px-4">
      <div className="py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {user.profilePictureUrl && (
            <div className="relative">
              <motion.img 
                src={user.profilePictureUrl} 
                alt="Profile"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-10 h-10 rounded-full ring-2 ring-blue-500/50 ring-offset-2 ring-offset-transparent"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black/20"></div>
            </div>
          )}
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-medium text-white"
            >
              {user.username || 'Usuario'}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs text-blue-200"
            >
              {user.walletAddress?.slice(0, 6)}...{user.walletAddress?.slice(-4)}
            </motion.p>
          </div>
        </div>
        
        {/* Selector de idiomas */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center space-x-2 px-3 py-2 text-sm bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 text-white border border-white/20"
          >
            <span>{currentLanguage?.flag}</span>
            <span>{currentLanguage?.code.toUpperCase()}</span>
            <motion.svg 
              animate={{ rotate: isLangOpen ? 180 : 0 }}
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute right-0 mt-2 w-48 bg-black/50 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 z-50"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <motion.button
                    key={lang.code}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-white first:rounded-t-lg last:rounded-b-lg"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
