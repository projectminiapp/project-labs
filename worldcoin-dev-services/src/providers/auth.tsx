'use client';

import { MiniKit } from '@worldcoin/minikit-js';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthState {
  isLoggedIn: boolean;
  user: {
    username: string;
    walletAddress: string;
    profilePictureUrl?: string;
  } | null;
}

interface AuthContextType extends AuthState {
  login: (userData: AuthState['user']) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(() => {
    // Intentar recuperar el estado de autenticación del localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('auth_state');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return { isLoggedIn: false, user: null };
  });

  useEffect(() => {
    // Verificar si el usuario está autenticado con MiniKit al cargar
    if (MiniKit.isInstalled() && MiniKit.user) {
      const userData = {
        username: MiniKit.user.username || 'Usuario',
        walletAddress: MiniKit.user.walletAddress || '0x0000',
        profilePictureUrl: MiniKit.user.profilePictureUrl
      };
      setAuthState({ isLoggedIn: true, user: userData });
    }
  }, []);

  useEffect(() => {
    // Guardar el estado de autenticación en localStorage cuando cambie
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_state', JSON.stringify(authState));
    }
  }, [authState]);

  const login = (userData: AuthState['user']) => {
    setAuthState({ isLoggedIn: true, user: userData });
  };

  const logout = () => {
    setAuthState({ isLoggedIn: false, user: null });
    localStorage.removeItem('auth_state');
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}