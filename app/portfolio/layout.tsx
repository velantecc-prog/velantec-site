import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio | VELANTEC Brands',
  description: 'Explore the innovative digital brands under VELANTEC: mrassistant.ai, buzzzbuzzz.com, growthlab.sg, and onestopsg.com.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

