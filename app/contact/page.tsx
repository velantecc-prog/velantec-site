import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact Us | VELANTEC',
  description: 'Get in touch with VELANTEC. Have a question or want to collaborate? We\'d love to hear from you.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  );
}

