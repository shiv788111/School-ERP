import Home from '../views/home/Home';

export const metadata = {
  title:
    "School ERP Software | School Management System with Mobile App | ConnectSkool",

  description:
    "ConnectSkool is an all-in-one School ERP Software with mobile apps for parents, teachers and students. Manage attendance, fees, exams, transport, communication and administration from one platform.",

  alternates: {
    canonical: "https://www.connectskool.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "School ERP Software | School Management System | ConnectSkool",
    description:
      "Complete School ERP Software with mobile apps, attendance, fee management, exams, transport and parent communication.",
    url: "https://www.connectskool.com",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConnectSkool School ERP Software",
      },
    ],
  },

  twitter: {
    title:
      "School ERP Software | ConnectSkool",
    description:
      "Complete School ERP with mobile apps for schools.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <Home />;
}
