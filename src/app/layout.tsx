import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ScrollRuntime } from "@/components/ScrollRuntime";
import "./scrollcraft.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swayam | SEO-led web development",
  description:
    "Scalable, SEO-friendly websites designed to help businesses earn organic visibility and turn relevant visits into enquiries.",
  openGraph: {
    title: "Swayam | SEO-led web development",
    description:
      "Web development shaped by five years of SEO experience.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollRuntime />
        {children}
      </body>
    </html>
  );
}
