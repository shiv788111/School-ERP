import About from '../../views/about/About'

// ─── METADATA ──────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL('https://www.connectskool.com'),

  title: {
    default: 'About ConnectSkool – School ERP Software',
    template: '%s | ConnectSkool',
  },

  description:
    'Learn about ConnectSkool, a modern School ERP Software that helps educational institutions simplify admissions, attendance, fees, examinations, transport, HR, and parent communication.',

  keywords: [
    'about ConnectSkool',
    'ConnectSkool',
    'school ERP software',
    'school management software',
    'education management software',
    'school automation',
    'school ERP India',
    'school administration software',
    'education technology',
    'digital school management',
    'school ERP platform',
    'school software company',
    'education technology India',
    'school management system',
    'attendance management software',
    'fee management software',
  ],

  alternates: {
    canonical: '/about',
    languages: {
      'en-IN': '/about',
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  referrer: 'origin-when-cross-origin',

  openGraph: {
    title: 'About ConnectSkool – School ERP Software',
    description:
      'Learn about ConnectSkool, a modern School ERP Software that helps educational institutions simplify admissions, attendance, fees, examinations, transport, HR, and parent communication.',
    url: 'https://www.connectskool.com/about',
    siteName: 'ConnectSkool',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og-image-about.png',
        width: 1200,
        height: 630,
        alt: 'About ConnectSkool - School ERP Software',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About ConnectSkool – School ERP Software',
    description:
      'Learn about ConnectSkool, a modern School ERP Software that helps educational institutions simplify school management.',
    images: ['/assets/og-image-about.png'],
  },

  authors: [{ name: 'ConnectSkool' }],
  creator: 'ConnectSkool',
  publisher: 'ConnectSkool',
  category: 'Education Technology',

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  appLinks: {
    android: {
      package: 'com.connectskool.app',
      url: 'https://play.google.com/store/apps/details?id=com.connectskool.app',
    },
  },
};

// ─── VIEWPORT ──────────────────────────────────────────────────────────────
// themeColor moved here to fix Next.js 15 warning
// NO UI or design changes - only configuration
export const viewport = {
  themeColor: '#1E4E6D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────
// NO CHANGES - same as before
export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About ConnectSkool",
            "url": "https://www.connectskool.com/about",
            "description": "Learn about ConnectSkool, a modern School ERP Software that helps educational institutions simplify admissions, attendance, fees, examinations, transport, HR, and parent communication.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "ConnectSkool",
              "url": "https://www.connectskool.com"
            },
            "about": {
              "@type": "SoftwareApplication",
              "name": "ConnectSkool",
              "applicationCategory": "Education Management Software",
              "operatingSystem": "Web, Android, iOS"
            }
          })
        }}
      />

      <About />
    </>
  );
}