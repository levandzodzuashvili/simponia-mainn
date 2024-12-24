"use client";
import React, { useState, useEffect } from "react";

interface ExchangeRateResponse {
  rates: {
    [key: string]: number;
  };
}

interface PriceConverterProps {
  initialPrice: string;
}

export default function PriceConverter({ initialPrice }: PriceConverterProps) {
  const initialPriceSpace = initialPrice.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const [gelRate, setGelRate] = useState<number | null>(null);
  const [isGel, setIsGel] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [displayPrice, setDisplayPrice] = useState<string>(initialPriceSpace);

  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch exchange rate");
        }

        const data: ExchangeRateResponse = await response.json();
        setGelRate(data.rates.GEL);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        setError(errorMessage);
      }
    }

    fetchExchangeRate();
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const toggleCurrency = () => {
    if (gelRate) {
      const numericPrice = parseFloat(initialPrice.replace(/\s/g, ""));

      if (!isGel) {
        const gelPrice = (numericPrice * gelRate).toFixed(0);
        setDisplayPrice(formatNumber(Number(gelPrice)));
      } else {
        setDisplayPrice(initialPriceSpace);
      }

      setIsGel(!isGel);
    }
  };

  if (error) return null;

  return (
    <div
      onClick={toggleCurrency}
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: gelRate ? "pointer" : "default",
        opacity: gelRate ? 1 : 0.5,
      }}
    >
      <h2 className="firago-lightitalic text-2xl whitespace-nowrap">
        {displayPrice}{" "}
        {isGel ? (
          <>
            <span className="">₾</span>
            <span className="sm:hover:text-primary text-[#888] ml-2">$</span>
          </>
        ) : (
          <>
            <span className="">$</span>
            <span className="sm:hover:text-primary text-[#888] ml-2">₾</span>
          </>
        )}
      </h2>
    </div>
  );
}
