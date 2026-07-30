import Pricing from '../../views/pricing/Pricing';

export const metadata = {
  // ─── METADATA BASE ────────────────────────────────────────────────────
  metadataBase: new URL('https://www.connectskool.com'),

  // ─── TITLE: Optimized (55 chars) ──────────────────────────────────────
  title: {
    default: 'School ERP Pricing Plans | ConnectSkool',
    template: '%s | ConnectSkool Pricing',
  },

  // ─── DESCRIPTION: Optimized (158 chars) ──────────────────────────────
  description:
    'Affordable school ERP pricing plans starting from ₹10,000. Includes dashboard, mobile app, attendance, fee management, and SMS notifications. No hidden costs.',

  // ─── KEYWORDS: Expanded for maximum AI visibility ─────────────────────
  keywords: [
    'school erp pricing',
    'school management software cost',
    'school erp price india',
    'school software pricing',
    'school erp plans',
    'school management system price',
    'affordable school erp',
    'school erp subscription',
    'school software cost',
    'attendance management pricing',
    'fee management software cost',
    'school mobile app pricing',
    'school SMS pricing',
    'best school erp price',
    'ConnectSkool pricing',
    'school erp india',
  ],

  // ─── CANONICAL URL ────────────────────────────────────────────────────
  alternates: {
    canonical: '/pricing',
    languages: {
      'en-IN': '/pricing',
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
    title: 'School ERP Pricing Plans | ConnectSkool',
    description:
      'Check affordable pricing for school ERP with mobile app, SMS, attendance, and fee management. Plans starting from ₹10,000.',
    url: 'https://www.connectskool.com/pricing',
    type: 'website',
    siteName: 'ConnectSkool',
    locale: 'en_IN',
    images: [
      {
        url: '/assets/og-image-pricing.png',
        width: 1200,
        height: 630,
        alt: 'ConnectSkool School ERP Pricing Plans - Affordable School Management Software',
      },
    ],
  },

  // ─── TWITTER CARDS: Enhanced for social sharing ──────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@ConnectSkool',
    title: 'School ERP Pricing Plans | ConnectSkool',
    description:
      'Affordable school ERP pricing plans starting from ₹10,000. Includes dashboard, mobile app, attendance, fee management, and SMS notifications.',
    images: ['/assets/og-image-pricing.png'],
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
  return <Pricing />;
}