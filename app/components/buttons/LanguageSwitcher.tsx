"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <button className="px-4 py-2 rounded opacity-70">
        <div className="flex flex-row gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-.1s]"></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-.2s]"></div>
        </div>
      </button>
    );
  }

  // Manually set the switch language text based on current language
  const switchLanguageText = language === "en" ? "GEO" : "ENG";

  return (
    <button
      onClick={toggleLanguage}
      className="text-white hover:text-[#D7A569] duration-300 transition-colors "
    >
      {switchLanguageText}
    </button>
  );
}
