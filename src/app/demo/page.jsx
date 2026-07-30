import BookDemo from '../../views/demo/BookDemo';

export const metadata = {
  // ─── METADATA BASE ────────────────────────────────────────────────────
  metadataBase: new URL('https://www.connectskool.com'),

  // ─── TITLE: Optimized (55 chars) ──────────────────────────────────────
  title: {
    default: 'Book Free Demo of School ERP Software | ConnectSkool',
    template: '%s | ConnectSkool Demo',
  },

  // ─── DESCRIPTION: Optimized (158 chars) ──────────────────────────────
  description:
    'Book a free demo of ConnectSkool school ERP software. See how attendance, fee management, mobile app and SMS notifications can simplify your school operations.',

  // ─── KEYWORDS: Expanded for maximum AI visibility ─────────────────────
  keywords: [
    'school erp demo',
    'book school software demo',
    'school management system demo',
    'school erp free demo',
    'school erp software',
    'school management software',
    'free demo school software',
    'school erp trial',
    'school management system',
    'attendance management software',
    'fee management software',
    'school mobile app',
    'school SMS notifications',
    'school automation software',
    'cloud school erp',
    'education erp demo',
    'school software demonstration',
    'ConnectSkool demo',
  ],

  // ─── CANONICAL URL ────────────────────────────────────────────────────
  alternates: {
    canonical: '/demo',
    languages: {
      'en-IN': '/demo',
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
    title: 'Book Free Demo of School ERP Software | ConnectSkool',
    description:
      'Schedule a free demo of our school ERP software with mobile app, attendance, fee management, and SMS notifications.',
    url: 'https://www.connectskool.com/demo',
    type: 'website',
    siteName: 'ConnectSkool',
    locale: 'en_IN',
    images: [
      {
        url: '/assets/og-image-demo.png',
        width: 1200,
        height: 630,
        alt: 'Book a free demo of ConnectSkool School ERP Software',
      },
    ],
  },

  // ─── TWITTER CARDS: Enhanced for social sharing ──────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@ConnectSkool',
    title: 'Book Free Demo of School ERP Software | ConnectSkool',
    description:
      'Schedule a free demo of our school ERP software with mobile app, attendance, fee management, and SMS notifications.',
    images: ['/assets/og-image-demo.png'],
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
  return <BookDemo />;
}