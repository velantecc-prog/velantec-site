import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              At VELANTEC, we are committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you 
              visit our website.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Information We Collect</h2>
            <p>
              We may collect information that you provide directly to us, such as when you 
              fill out a contact form, subscribe to our newsletter, or communicate with us.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              respond to your inquiries, and send you updates about our company and brands.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@velantec.com" className="text-black hover:underline">
                privacy@velantec.com
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

