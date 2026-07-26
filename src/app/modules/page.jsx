import Modules from '../../views/modules/Modules';

export const metadata = {
  title: 'School ERP Modules & Features | ConnectSkool',

  description: 'Explore powerful school ERP modules including attendance, fee management, student records, SMS notifications, transport, and more.',

  keywords: ['school erp modules', 'school management system features', 'school software modules', 'attendance fee management system'],

  alternates: {
    canonical: 'https://www.connectskool.com/modules',
  },

  openGraph: {
    title: 'School ERP Modules & Features | ConnectSkool',
    description: 'Discover all modules of ConnectSkool ERP including attendance, fees, exams, transport and SMS system.',
    url: 'https://www.connectskool.com/modules',
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
  return <Modules />;
}
