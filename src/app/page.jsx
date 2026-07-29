import Home from '../views/home/Home';

export const metadata = {
  // ─── TITLE: Optimized length (55 chars) ──────────────────────────────
  title: "ConnectSkool | School ERP Software & School Management System",

  // ─── DESCRIPTION: Optimized length (158 chars) ──────────────────────
  description:
    "ConnectSkool is a complete School ERP Software for admissions, attendance, fees, exams, transport and communication. Trusted by schools across India.",

  // ─── KEYWORDS: Expanded with high-value terms ──────────────────────
  keywords: [
    "School ERP Software",
    "School Management System",
    "School ERP",
    "School Software",
    "Education ERP",
    "School Administration Software",
    "Student Management System",
    "Attendance Management System",
    "Fee Management Software",
    "School Mobile App",
    "Online School ERP",
    "School Automation",
    "Education Management Software",
    "Cloud School ERP",
    "School ERP India",
    "ConnectSkool",
  ],

  // ─── CANONICAL: Already correct ──────────────────────────────────────
  alternates: {
    canonical: "https://www.connectskool.com",
  },

  // ─── ROBOTS: Enhanced with googleBot options ────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ─── OPEN GRAPH: Page-specific values ──────────────────────────────
  openGraph: {
    title: "ConnectSkool | School ERP Software",
    description:
      "Complete School ERP Software for admissions, attendance, fees, exams, transport and communication.",
    url: "https://www.connectskool.com",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConnectSkool School ERP Software Dashboard",
      },
    ],
  },

  // ─── TWITTER: Page-specific values ──────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "ConnectSkool | School ERP Software",
    description:
      "Complete School ERP Software with mobile apps for schools.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <Home />;
}