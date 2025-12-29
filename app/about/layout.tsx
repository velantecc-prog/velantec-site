import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About VELANTEC | Our Story & Mission',
  description: 'Learn about VELANTEC, the strategic home for innovative digital ventures and forward-thinking brands.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

