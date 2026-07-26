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
    'ConnectSkool by FounderCodes - Complete school ERP software with mobile app, attendance, fee management & SMS notifications. Based in Greater Noida.',

  keywords: [
    'school erp software',
    'school management system',
    'school mobile app',
    'school management software india',
    'fee management software',
    'attendance management system',
  ],

  authors: [{ name: 'FounderCodes' }],
  creator: 'FounderCodes',
  publisher: 'FounderCodes',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'ConnectSkool',
    title: 'ConnectSkool | School ERP Software with Mobile App',
    description:
      'Complete school ERP by FounderCodes. Mobile apps, attendance, fees & SMS alerts. Serving schools across India.',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ConnectSkool School ERP Dashboard',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ConnectSkool | School ERP Software',
    description:
      'Modern school management with ERP, mobile apps & parent communication. By FounderCodes, Greater Noida.',
    images: ['/assets/og-image.png'],
  },

  alternates: {
    canonical: 'https://www.connectskool.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.connectskool.com/#organization',
                  name: 'FounderCodes',
                  url: 'https://www.connectskool.com',
                  logo: 'https://www.connectskool.com/assets/logo.png',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+91-9236788668',
                    contactType: 'sales',
                    email: 'sales@foundercodes.com',
                    areaServed: 'IN',
                    availableLanguage: ['English', 'Hindi'],
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Gaur City Mall, Sector-4, Greater Noida, UP – 201318',
                    addressCountry: 'IN',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.connectskool.com/#website',
                  url: 'https://www.connectskool.com',
                  name: 'ConnectSkool',
                  description:
                    'School ERP software with mobile app for attendance, fees, and communication.',
                  publisher: {
                    '@id': 'https://www.connectskool.com/#organization',
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate:
                        'https://www.connectskool.com/search?q={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is ConnectSkool?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'ConnectSkool is a comprehensive school ERP software by FounderCodes that helps schools manage attendance, fees, communication, and administration through web and mobile apps. Based in Greater Noida, serving schools across India.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How can I get a demo of ConnectSkool?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Contact our sales team at +91-9236788668 or email sales@foundercodes.com. Visit us at Gaur City Mall, Sector-4, Greater Noida, UP – 201318.',
                      },
                    },
                  ],
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: 'https://www.connectskool.com',
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main className="pt-20" id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}