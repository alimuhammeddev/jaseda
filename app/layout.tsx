import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jasedas.com"),
  title: {
    default: "Jaseda Company Ltd | Construction, Property & Cleaning",
    template: "%s | Jaseda Company Ltd",
  },
  description:
    "Construction, property development and professional cleaning services from Jaseda Company Ltd, based in London, United Kingdom.",
  applicationName: "Jaseda Company Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Jaseda Company Ltd",
    title: "Jaseda Company Ltd | Construction, Property & Cleaning",
    description:
      "Construction, property development and professional cleaning services from Jaseda Company Ltd, based in London.",
    url: "https://www.jasedas.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaseda Company Ltd | Construction, Property & Cleaning",
    description:
      "Construction, property development and professional cleaning services from Jaseda Company Ltd, based in London.",
  },
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jaseda Company Ltd",
  url: "https://www.jasedas.com/",
  email: "info@jaseda.com",
  telephone: "+44 7413 330344",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "Construction, property development and cleaning services from Jaseda Company Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
