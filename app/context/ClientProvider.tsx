"use client";

import { LanguageProvider } from "@/app/context/LanguageContext";
import { useEffect, useState } from "react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <LanguageProvider>{children}</LanguageProvider>;
}
