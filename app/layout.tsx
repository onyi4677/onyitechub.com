import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onyitech JournalHub Ltd | AI, ML & Publishing Technology",
  description: "Onyitech JournalHub Ltd builds AI/ML software, publishing infrastructure and workflow automation for research organizations, journals and modern teams.",
  keywords: ["AI company Nigeria","machine learning engineering","AI workflow automation","Python automation","academic publishing technology","OJS development","Open Journal Systems","journal hosting","editorial workflow automation","research technology","Onyitech JournalHub"],
  authors: [{ name: "Onyitech JournalHub Ltd" }],
  metadataBase: new URL("https://www.onyitechub.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Onyitech JournalHub Ltd | AI, ML & Publishing Technology",
    description: "AI/ML engineering, publishing infrastructure and workflow automation.",
    url: "https://www.onyitechub.com",
    siteName: "Onyitech JournalHub Ltd",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Onyitech JournalHub Ltd",
  url: "https://www.onyitechub.com",
  logo: "https://www.onyitechub.com/icon.svg",
  description: "AI/ML engineering, academic publishing technology and workflow automation for research organizations, journals and teams.",
  email: "admin@onyitechub.com",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
