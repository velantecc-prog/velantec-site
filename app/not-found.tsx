import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center bg-white">
        <div className="text-center px-6">
          <h1 className="text-9xl font-bold text-black mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

