import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onyitech JournalHub Ltd | AI, ML & Publishing Technology",
  description: "Onyitech JournalHub Ltd builds AI/ML software, publishing infrastructure and workflow automation for research organizations, journals and modern teams.",
  keywords: ["AI company Nigeria","machine learning engineering","AI workflow automation","Python automation","academic publishing technology","OJS development","Open Journal Systems","journal hosting","editorial workflow automation","research technology","Onyitech JournalHub"],
  authors: [{ name: "Onyitech JournalHub Ltd" }],
  metadataBase: new URL("https://onyitechub.com"),
  openGraph: {
    title: "Onyitech JournalHub Ltd | AI, ML & Publishing Technology",
    description: "AI/ML engineering, publishing infrastructure and workflow automation.",
    url: "https://onyitechub.com",
    siteName: "Onyitech JournalHub Ltd",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
