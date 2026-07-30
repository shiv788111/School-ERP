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
    'ConnectSkool is a complete School ERP Software that simplifies admissions, attendance, fee management, examinations, transport, and parent communication.',

  keywords: [
    'school erp software',
    'school management system',
    'school mobile app',
    'school management software india',
    'fee management software',
    'attendance management system',
    'school administration software',
    'education erp',
    'cloud school erp',
    'school automation',
    'online school management',
    'parent communication app',
    'exam management system',
    'transport management system',
    'ConnectSkool',
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

  alternates: {
    canonical: 'https://www.connectskool.com',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'ConnectSkool',
    title: 'ConnectSkool | School ERP Software with Mobile App',
    description:
      'Complete school ERP software for admissions, attendance, fees, exams, and communication. Trusted by schools across India.',
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
      'Complete school management system with ERP, mobile apps & parent communication. By FounderCodes.',
    images: ['/assets/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {/* ─── SINGLE COMPLETE SOFTWAREAPPLICATION SCHEMA ────────────── */}
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
                    addressLocality: 'Greater Noida',  // ✅ Added
                    postalCode: '201318',              // ✅ Added
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
                        text: 'Contact our sales team at +91-9236788668 or email sales@foundercodes.com to book a free demo.',
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
                // ─── SINGLE COMPLETE SOFTWAREAPPLICATION ──────────────
                {
                  '@type': 'SoftwareApplication',
                  '@id': 'https://www.connectskool.com/#software',
                  name: 'ConnectSkool School ERP Software',
                  applicationCategory: 'Education Management Software',
                  applicationSubCategory: 'School ERP',
                  operatingSystem: 'Web, Android, iOS',
                  browserRequirements: 'Modern browsers',
                  description:
                    'Complete school management software for admissions, attendance, fees, exams, transport, and staff management.',
                  url: 'https://www.connectskool.com',
                  image: 'https://www.connectskool.com/assets/og-image.png',
                  softwareVersion: '1.0',
                  publisher: {
                    '@type': 'Organization',
                    name: 'FounderCodes',
                  },
                  offers: {
                    '@type': 'Offer',
                    description: 'Free demo available',
                    availability: 'https://schema.org/InStock',
                  },
                  featureList: [
                    'Attendance Management',
                    'Fee Management',
                    'Examination Management',
                    'Transport Management',
                    'Student Management',
                    'Staff Management',
                    'Parent Communication',
                    'Real-Time Analytics',
                    'Mobile Apps',
                    'Cloud-Based Platform',
                  ],
                  applicationSubCategory: [
                    'Pre-Primary School Management',
                    'Primary School Management',
                    'Senior Secondary School Management',
                    'University Management',
                    'K-12 School Management',
                    'Preschool Management',
                    'Coaching Institute Management',
                    'Tutor Management',
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