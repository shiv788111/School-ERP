import Pricing from '../../views/pricing/Pricing';

export const metadata = {
  title: 'School ERP Pricing Plans | ConnectSkool',

  description:
    'Affordable school ERP pricing plans starting from ₹10,000. Includes dashboard, mobile app, attendance, fee management, and SMS notifications.',

  keywords: ['school erp pricing', 'school management software cost', 'school erp price india', 'school software pricing'],

  alternates: {
    canonical: 'https://www.connectskool.com/pricing',
  },

  openGraph: {
    title: 'School ERP Pricing Plans | ConnectSkool',
    description: 'Check affordable pricing for school ERP with mobile app, SMS, attendance and fee management.',
    url: 'https://www.connectskool.com/pricing',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return <Pricing />;
}
