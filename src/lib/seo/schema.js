import { SITE_CONFIG } from './config';

export function getOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.organization.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/assets/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.organization.phone,
      contactType: 'sales',
      email: SITE_CONFIG.organization.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.organization.address,
      addressCountry: 'IN',
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getWebPageSchema({ title, description, url }) {
  return {
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
    about: { '@id': `${SITE_CONFIG.url}/#organization` },
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

export function getFAQSchema(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function getSoftwareAppSchema({ name, description, features, url }) {
  return {
    '@type': 'SoftwareApplication',
    name,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web, iOS, Android',
    description,
    url,
    offers: { '@type': 'Offer', category: 'School Management Software' },
    ...(features && { featureList: features }),
  };
}