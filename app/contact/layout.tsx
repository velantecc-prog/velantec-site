import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | VELANTEC',
  description: 'Get in touch with VELANTEC. Have a question or want to collaborate? We\'d love to hear from you.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

