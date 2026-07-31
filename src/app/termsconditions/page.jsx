import TermsConditions from '../../views/termsconditions/TermsConditions'

export const metadata = {
  // ─── METADATA BASE ────────────────────────────────────────────────────
  metadataBase: new URL('https://www.connectskool.com'),

  // ─── TITLE: Optimized (55 chars) ──────────────────────────────────────
  title: {
    default: 'Terms & Conditions | ConnectSkool',
    template: '%s | ConnectSkool',
  },

  // ─── DESCRIPTION: Optimized (158 chars) ──────────────────────────────
  description:
    'Read ConnectSkool\'s Terms & Conditions to understand the rules, guidelines, and legal agreements governing the use of our School ERP platform.',

  // ─── KEYWORDS: Expanded for maximum AI visibility ─────────────────────
  keywords: [
    'terms and conditions',
    'ConnectSkool terms',
    'school erp terms',
    'terms of service',
    'legal terms',
    'terms of use',
    'school software terms',
    'education software terms',
    'service agreement',
    'user agreement',
    'ConnectSkool legal',
    'school erp legal',
    'terms compliance',
    'platform terms',
    'usage policy',
  ],

  // ─── CANONICAL URL ────────────────────────────────────────────────────
  alternates: {
    canonical: '/termsconditions',
    languages: {
      'en-IN': '/termsconditions',
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
    title: 'Terms & Conditions | ConnectSkool',
    description:
      'Read ConnectSkool\'s Terms & Conditions. Learn about the rules and legal agreements governing the use of our platform.',
    url: 'https://www.connectskool.com/termsconditions',
    type: 'website',
    siteName: 'ConnectSkool',
    locale: 'en_IN',
    images: [
      {
        url: '/assets/og-image-terms.png',
        width: 1200,
        height: 630,
        alt: 'ConnectSkool Terms & Conditions - Legal Agreement',
      },
    ],
  },

  // ─── TWITTER CARDS: Enhanced for social sharing ──────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@ConnectSkool',
    title: 'Terms & Conditions | ConnectSkool',
    description:
      'Read ConnectSkool\'s Terms & Conditions. Understand the rules and guidelines for using our School ERP platform.',
    images: ['/assets/og-image-terms.png'],
  },

  // ─── ADDITIONAL META TAGS ────────────────────────────────────────────
  category: 'Legal',
  authors: [{ name: 'ConnectSkool' }],
  creator: 'ConnectSkool',
  publisher: 'ConnectSkool',

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
  },
};

export default function Page() {
  return <TermsConditions />;
}