import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "INFINI | Admin Console",
    template: "%s | Infini Admin",
  },
  description:
    "INFINI Precision surface finishing administration console, inquiries CRM, exhibition banner scheduler, and content management.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060606",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} dark`}
      data-surface="dark"
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent font-sans">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            classNames: {
              toast: "bg-card border border-border text-foreground",
              title: "text-accent font-semibold",
              description: "text-muted-foreground text-xs",
            },
          }}
        />
      </body>
    </html>
  );
}
