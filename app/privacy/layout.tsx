import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | VELANTEC',
  description: 'VELANTEC Privacy Policy - How we collect, use, and protect your personal information.',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

