import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onyitech JournalHub — Publishing infrastructure for research journals",
  description:
    "Onyitech JournalHub Ltd builds the submission, review, and publication infrastructure behind academic research journals — OJS deployment, editorial automation, and indexing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
