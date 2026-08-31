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
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
