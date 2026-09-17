import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onyitech JournalHub Ltd | Academic Publishing Technology",
  description:
    "Onyitech JournalHub Ltd builds digital infrastructure for academic publishing, including OJS development, journal hosting, editorial workflow automation, research technology and publishing systems.",
  keywords: [
    "academic publishing",
    "OJS development",
    "Open Journal Systems",
    "journal hosting",
    "journal automation",
    "academic journal management",
    "research technology",
    "publishing technology",
    "editorial workflow automation",
    "Onyitech JournalHub",
  ],
  authors: [{ name: "Onyitech JournalHub Ltd" }],
  metadataBase: new URL("https://onyitechub.com"),
  openGraph: {
    title: "Onyitech JournalHub Ltd | Academic Publishing Technology",
    description:
      "Digital infrastructure for modern academic publishing — OJS, journal hosting, editorial automation and research technology.",
    url: "https://onyitechub.com",
    siteName: "Onyitech JournalHub Ltd",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
