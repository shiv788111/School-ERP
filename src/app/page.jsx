import Home from '../views/home/Home';

export const metadata = {
  title: 'School ERP Software with Mobile App | ConnectSkool',

  description:
    'ConnectSkool is a complete school ERP software with mobile app, attendance, fee management, SMS notifications, and advanced reporting. Perfect for schools of all sizes.',

  keywords: ['school erp software', 'school management system', 'school app', 'school software india', 'school management software with app'],

  openGraph: {
    title: 'ConnectSkool | School ERP Software',
    description: 'Manage your school with ERP software including mobile app, fees, attendance and SMS notifications.',
    url: 'https://www.connectskool.com',
    siteName: 'ConnectSkool',
    images: [
      {
        url: '/assets/og-image.png', // add this image in public folder
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },

  alternates: {
    canonical: 'https://www.connectskool.com',
  },
};

export default function Page() {
  return <Home />;
}
