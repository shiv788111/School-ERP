import Features from '../../views/features/Features';

export const metadata = {
  title: 'School ERP Features & Benefits | ConnectSkool',

  description:
    'Discover powerful features of ConnectSkool including attendance tracking, fee management, mobile app, SMS notifications, and real-time analytics for schools.',

  keywords: ['school erp features', 'school management system features', 'school software benefits', 'school app features'],

  alternates: {
    canonical: 'https://www.connectskool.com/features',
  },

  openGraph: {
    title: 'School ERP Features & Benefits | ConnectSkool',
    description: 'Explore key features like attendance, fees, mobile app, SMS alerts and analytics in ConnectSkool ERP.',
    url: 'https://www.connectskool.com/features',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return <Features />;
}
