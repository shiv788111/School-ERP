import Features from '../../views/features/Features';

export const metadata = {
  // ─── TITLE: SEO Optimized (55 chars) ──────────────────────────────────────
  title: "School ERP Software Features | ConnectSkool",

  // ─── DESCRIPTION: SEO Optimized (158 chars) ──────────────────────────────
  description:
    "Explore ConnectSkool's School ERP Software features including admissions, attendance, fee management, examinations, transport, mobile apps, communication and analytics.",

  // ─── KEYWORDS: Optimized for AI Visibility ──────────────────────────────
  keywords: [
    "School ERP Features",
    "School ERP Software",
    "School Management System Features",
    "Attendance Management",
    "Fee Management Software",
    "Student Information System",
    "School Mobile App",
    "Online School ERP",
    "School Automation",
    "Education ERP",
    "Academic Management System",
    "School Administration Software",
    "Parent Communication App",
    "Exam Management System",
    "Transport Management System",
    "ConnectSkool Features",
  ],

  // ─── CANONICAL URL ──────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.connectskool.com/features",
  },

  // ─── ROBOTS: Enhanced for Better Crawling ──────────────────────────────
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

  // ─── OPEN GRAPH: Enhanced for Social Sharing ──────────────────────────
  openGraph: {
    title: "School ERP Software Features | ConnectSkool",
    description:
      "Complete School ERP Software features including admissions, attendance, fee management, examinations, transport, communication and analytics.",
    url: "https://www.connectskool.com/features",
    type: "website",
    siteName: "ConnectSkool",
    locale: "en_IN",
    images: [
      {
        url: "/assets/og-image-features.png",
        width: 1200,
        height: 630,
        alt: "ConnectSkool School ERP Features Dashboard",
      },
    ],
  },

  // ─── TWITTER CARDS: Enhanced for Social Sharing ────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "School ERP Software Features | ConnectSkool",
    description: "Explore powerful ERP features for modern schools including attendance, fees, exams, transport, and communication.",
    images: ["/assets/og-image-features.png"],
  },
};

export default function Page() {
  return <Features />;
}