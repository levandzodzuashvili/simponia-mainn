import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Room Details | Your Hotel Name",
  description: "Detailed information about our luxurious rooms",
};

export default function RoomDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto pt-36">{children}</div>
    </section>
  );
}
