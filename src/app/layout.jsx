import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFloat from '../components/shared/WhatsAppFloat';

export const metadata = {
  metadataBase: new URL('https://www.connectskool.com'),

  title: {
    default: 'ConnectSkool | School ERP Software with Mobile App',
    template: '%s | ConnectSkool',
  },

  description:
    'ConnectSkool is a complete school ERP software with mobile app, attendance, fee management, SMS notifications, and advanced reporting.',

  keywords: ['school erp software', 'school management system', 'school software', 'school app', 'school management software india'],

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'ConnectSkool | School ERP Software',
    description: 'Manage your school with ERP software including mobile app, fees, attendance and SMS notifications.',
    url: 'https://www.connectskool.com',
    siteName: 'ConnectSkool',
    images: [
      {
        url: '/og-image.png', // add this in public folder
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ConnectSkool | School ERP Software',
    description: 'Complete school ERP with mobile app, attendance, fees and SMS notifications.',
    images: ['/og-image.png'],
  },

  alternates: {
    canonical: 'https://www.connectskool.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
