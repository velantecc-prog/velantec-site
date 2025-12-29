import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms & Conditions | VELANTEC',
  description: 'VELANTEC Terms and Conditions - Terms of use for our website and services.',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

