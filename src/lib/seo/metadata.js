import { SITE_CONFIG } from './config';

export function generateMetadata({
  title,
  description,
  path = '/',
  ogImage = SITE_CONFIG.ogImage,
  noIndex = false,
  keywords = [],
}) {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE_CONFIG.name}`;

  const defaultKeywords = [
    'school erp software',
    'school management system',
    'school mobile app',
    'school management software india',
  ];

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].slice(0, 10),
    authors: [{ name: SITE_CONFIG.organization.name }],
    creator: SITE_CONFIG.organization.name,
    publisher: SITE_CONFIG.organization.name,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
    icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  };
}