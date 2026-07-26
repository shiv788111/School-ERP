import BookDemo from '../../views/demo/BookDemo';

export const metadata = {
  title: 'Book Free Demo of School ERP Software | ConnectSkool',

  description:
    'Book a free demo of ConnectSkool school ERP software. See how attendance, fee management, mobile app and SMS notifications can simplify your school operations.',

  keywords: ['school erp demo', 'book school software demo', 'school management system demo', 'school erp free demo'],

  alternates: {
    canonical: 'https://www.connectskool.com/demo',
  },

  openGraph: {
    title: 'Book Free Demo | ConnectSkool ERP',
    description: 'Schedule a free demo of our school ERP software with mobile app and advanced features.',
    url: 'https://www.connectskool.com/demo',
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
  return <BookDemo />;
}
