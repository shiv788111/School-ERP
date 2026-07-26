// src/components/seo/DynamicSchema.jsx
import {
  organizationSchema,
  websiteSchema,
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
  productSchema,
  localBusinessSchema,
} from '@/lib/seo/schema';

export function PageSchema({ 
  title, 
  description, 
  url, 
  datePublished, 
  dateModified,
  breadcrumbs = [],
  faqs = [],
  schemaType = 'webpage',
  software,
  product,
  showLocalBusiness = false,
  showOrganization = true,
  showWebsite = true,
}) {
  const schemas = [];

  // Always include organization and website on homepage
  if (showOrganization) {
    schemas.push(organizationSchema());
  }
  
  if (showWebsite) {
    schemas.push(websiteSchema());
  }

  // Page-specific schema
  if (schemaType === 'webpage' && title && url) {
    schemas.push(webPageSchema({ title, description, url, datePublished, dateModified }));
  }

  // Software application schema
  if (software) {
    schemas.push(softwareApplicationSchema({
      name: software.name || title,
      description: software.description || description,
      features: software.features || [],
      url: software.url || url,
    }));
  }

  // Product schema
  if (product) {
    schemas.push(productSchema({
      name: product.name || title,
      description: product.description || description,
      url: product.url || url,
      image: product.image,
    }));
  }

  // Breadcrumb schema
  if (breadcrumbs.length > 0) {
    schemas.push(breadcrumbSchema(breadcrumbs));
  }

  // FAQ schema
  const faqData = faqSchema(faqs);
  if (faqData) {
    schemas.push(faqData);
  }

  // Local business (only on contact/location pages)
  if (showLocalBusiness) {
    schemas.push(localBusinessSchema());
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

// Homepage-specific schema
export function HomePageSchema() {
  return (
    <PageSchema
      title="ConnectSkool | School ERP Software with Mobile App"
      description="Complete school ERP software by FounderCodes. Mobile app, attendance, fee management, SMS notifications & 50+ modules."
      url="https://www.connectskool.com"
      breadcrumbs={[
        { name: 'Home', url: 'https://www.connectskool.com' },
      ]}
      faqs={[
        {
          question: 'What is ConnectSkool?',
          answer: 'ConnectSkool is a comprehensive school ERP software by FounderCodes that helps educational institutions manage attendance, fees, communication, and administrative tasks through web and mobile apps.',
        },
        {
          question: 'How can I get a demo?',
          answer: 'Contact our sales team at +91-9236788668 or email sales@foundercodes.com. Our office is in Gaur City Mall, Sector-4, Greater Noida.',
        },
      ]}
      software={{
        name: 'ConnectSkool',
        description: 'Complete school management ERP with mobile apps, attendance tracking, fee management, and communication tools.',
        features: [
          'Attendance Management',
          'Fee Management',
          'Mobile Apps',
          'SMS Notifications',
          'Exam Management',
          'Transport Management',
        ],
      }}
    />
  );
}