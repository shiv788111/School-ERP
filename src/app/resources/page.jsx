import Resources from '../../views/resources/Resources';

export const metadata = {
  title: 'Resources for School Management | ConnectSkool',

  description: 'Explore helpful resources, guides, and tools for school management, ERP software, and digital transformation for schools.',

  keywords: ['school management resources', 'school erp guides', 'school software tutorials', 'education management tools'],

  alternates: {
    canonical: 'https://www.connectskool.com/resources',
  },

  openGraph: {
    title: 'Resources for School Management | ConnectSkool',
    description: 'Access guides and resources for school ERP, management systems, and digital tools.',
    url: 'https://www.connectskool.com/resources',
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
  return <Resources />;
}
