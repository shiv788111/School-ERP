import Modules from '../../views/modules/Modules';

export const metadata = {
  // ─── METADATA BASE ────────────────────────────────────────────────────
  metadataBase: new URL('https://www.connectskool.com'),

  // ─── TITLE: Optimized (55 chars) ──────────────────────────────────────
  title: {
    default: 'School ERP Modules & Features | ConnectSkool',
    template: '%s | ConnectSkool Modules',
  },

  // ─── DESCRIPTION: Optimized (158 chars) ──────────────────────────────
  description:
    'Explore 200+ school ERP modules including attendance, fee management, student records, SMS notifications, transport, exams, and communication. Cloud-based school management software.',

  // ─── KEYWORDS: Expanded for maximum AI visibility ─────────────────────
  keywords: [
    'school erp modules',
    'school management system features',
    'school software modules',
    'attendance fee management system',
    'school erp features',
    'school management software',
    'student management system',
    'exam management module',
    'school transport management',
    'school communication system',
    'cloud school erp',
    'education erp software',
    'school administration software',
    'parent communication app',
    'online school management',
    'school automation software',
    'academic management system',
    'school payroll software',
    'library management system',
    'ConnectSkool modules',
  ],

  // ─── CANONICAL URL ────────────────────────────────────────────────────
  alternates: {
    canonical: '/modules',
    languages: {
      'en-IN': '/modules',
    },
  },

  // ─── ROBOTS: Enhanced for better crawling ────────────────────────────
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

  // ─── OPEN GRAPH: Enhanced for social sharing ────────────────────────
  openGraph: {
    title: 'School ERP Modules & Features | ConnectSkool',
    description:
      'Complete school ERP modules including attendance, fee management, student records, transport, exams, SMS, and communication system.',
    url: 'https://www.connectskool.com/modules',
    type: 'website',
    siteName: 'ConnectSkool',
    locale: 'en_IN',
    images: [
      {
        url: '/assets/og-image-modules.png',
        width: 1200,
        height: 630,
        alt: 'ConnectSkool School ERP Modules Dashboard showing attendance, fee management, and student records',
      },
    ],
  },

  // ─── TWITTER CARDS: Enhanced for social sharing ──────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@ConnectSkool',
    title: 'School ERP Modules & Features | ConnectSkool',
    description: 'Complete school ERP modules for attendance, fees, students, transport, exams, SMS, and communication.',
    images: ['/assets/og-image-modules.png'],
  },

  // ─── ADDITIONAL META TAGS ────────────────────────────────────────────
  category: 'Education Technology',
  authors: [{ name: 'ConnectSkool' }],
  creator: 'ConnectSkool',
  publisher: 'ConnectSkool',

  // ─── VERIFICATION (Uncomment when you have codes) ────────────────────
  // verification: {
  //   google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  //   other: {
  //     'facebook-domain-verification': 'YOUR_FACEBOOK_CODE',
  //   },
  // },

  // ─── APP LINKS ────────────────────────────────────────────────────────
  appLinks: {
    android: {
      package: 'com.connectskool.app',
      url: 'https://play.google.com/store/apps/details?id=com.connectskool.app',
    },
  },

  // ─── OTHER META TAGS ──────────────────────────────────────────────────
  other: {
    'msapplication-TileColor': '#1E4E6D',
    'theme-color': '#1E4E6D',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function Page() {
  return <Modules />;
}