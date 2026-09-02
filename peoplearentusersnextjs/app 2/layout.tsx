import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jeannettemichels.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "People Aren't Users",
    description: "Five letters where a person used to be. A book by Jeannette Michels.",
    url: "https://jeannettemichels.com",
    type: "website",
    images: ["/images/people-arent-users-editorial.png"],
  },
  title: "People Aren't Users | Jeannette Michels",
  description:
    "Five letters where a person used to be. A book about the word at the center of systems built to serve people, and what it costs.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jeannettemichels.com/#person",
        "name": "Jeannette Michels",
        "url": "https://jeannettemichels.com",
        "jobTitle": "Marketing executive and author",
        "sameAs": ["https://www.linkedin.com/in/jeannettemichels/"],
      },
      {
        "@type": "Book",
        "@id": "https://jeannettemichels.com/#book",
        "name": "People Aren't Users",
        "alternateName": "People Aren't Users: Five Letters Where a Person Used to Be",
        "url": "https://jeannettemichels.com",
        "author": { "@id": "https://jeannettemichels.com/#person" },
        "inLanguage": "en",
        "genre": "Nonfiction",
        "description": "A book about the word at the center of systems built to serve people, and what it costs.",
      },
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
