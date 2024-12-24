"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Translations, Feature } from "@/app/constants";
import { translations } from "@/app/constants";

export type Language = keyof Translations;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof Feature) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ge");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial language from localStorage or browser preference
    const savedLanguage = localStorage.getItem(
      "preferred-language"
    ) as Language | null;
    const browserLanguage = navigator.language.startsWith("ge") ? "ge" : "en";

    setLanguage(savedLanguage || browserLanguage);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("preferred-language", language);
    }
  }, [language, isLoading]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ge" ? "en" : "ge"));
  };

  const t = (key: keyof Feature): string => {
    return translations[language][0][key] as string;
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t, isLoading }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
