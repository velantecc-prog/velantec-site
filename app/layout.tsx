import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELANTEC | Building Tomorrow's Digital Brands with Purpose",
  description: "VELANTEC is the parent company of forward-looking digital brands including mrassistant.ai, buzzzbuzzz.com, growthlab.sg, and onestopsg.com. We build innovative digital products and services with purpose-driven design.",
  keywords: ["VELANTEC", "digital brands", "parent company", "innovation", "technology", "startups"],
  authors: [{ name: "VELANTEC" }],
  openGraph: {
    title: "VELANTEC | Building Tomorrow's Digital Brands with Purpose",
    description: "Parent company of forward-looking digital brands",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELANTEC | Building Tomorrow's Digital Brands with Purpose",
    description: "Parent company of forward-looking digital brands",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html, body {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
            }
          `
        }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
