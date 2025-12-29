import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | VELANTEC',
  description: 'VELANTEC Terms and Conditions - Terms of use for our website and services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
            Terms & Conditions
          </h1>
          <div className="prose prose-lg max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              Please read these Terms and Conditions carefully before using the VELANTEC website.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms and Conditions. 
              If you disagree with any part of these terms, you may not access the website.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily view the materials on VELANTEC&apos;s website 
              for personal, non-commercial transitory viewing only.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Disclaimer</h2>
            <p>
              The materials on VELANTEC&apos;s website are provided on an &apos;as is&apos; basis. 
              VELANTEC makes no warranties, expressed or implied, and hereby disclaims and negates 
              all other warranties.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Limitations</h2>
            <p>
              In no event shall VELANTEC or its suppliers be liable for any damages arising out 
              of the use or inability to use the materials on VELANTEC&apos;s website.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at{' '}
              <a href="mailto:legal@velantec.com" className="text-black hover:underline">
                legal@velantec.com
              </a>
            </p>
          </div>
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

