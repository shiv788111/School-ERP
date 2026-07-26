import {
  getOrganizationSchema,
  getWebsiteSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getSoftwareAppSchema,
} from '@/lib/seo/schema';

export default function JsonLd({
  page = {},
  breadcrumbs = [],
  faqs = [],
  software = null,
}) {
  const schemas = [getOrganizationSchema(), getWebsiteSchema()];

  if (page.title && page.url) {
    schemas.push(getWebPageSchema(page));
  }

  if (breadcrumbs.length > 0) {
    schemas.push(getBreadcrumbSchema(breadcrumbs));
  }

  if (faqs.length > 0) {
    schemas.push(getFAQSchema(faqs));
  }

  if (software) {
    schemas.push(
      getSoftwareAppSchema({
        name: software.name || page.title,
        description: software.description || page.description,
        features: software.features || [],
        url: software.url || page.url,
      })
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': schemas,
        }),
      }}
    />
  );
}