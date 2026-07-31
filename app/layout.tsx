import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.trailtreetrip.com"
  ),

  title: {
    default: "TrailTreeTrip | Visa Consultant & Travel Agency in Bengaluru",
    template: "%s | TrailTreeTrip",
  },

  description:
    "TrailTreeTrip provides tourist visa, business visa, family visit visa, passport services, flight booking, hotel reservations, travel insurance and customized holiday packages from Bengaluru.",

  keywords: [
    "visa consultant Bangalore",
    "travel agency Bangalore",
    "passport services Bengaluru",
    "tourist visa consultant Bangalore",
    "business visa consultant Bangalore",
    "family visit visa assistance",
    "Schengen visa consultant Bangalore",
    "Singapore visa Bangalore",
    "Malaysia visa Bangalore",
    "Thailand visa Bangalore",
    "Dubai visa Bangalore",
    "South Korea visa Bangalore",
    "flight booking Bangalore",
    "travel insurance Bangalore",
    "holiday packages Bangalore",
  ],

  authors: [{ name: "TrailTreeTrip" }],
  creator: "TrailTreeTrip",
  publisher: "TrailTreeTrip",
  applicationName: "TrailTreeTrip",
  category: "Travel",

  openGraph: {
    title: "TrailTreeTrip | Visa & Travel Services in Bengaluru",
    description:
      "Professional visa assistance, passport services, flights, hotels, travel insurance and holiday packages.",
    url: "https://www.trailtreetrip.com",
    siteName: "TrailTreeTrip",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/trailtreetrip-logo.png",
        width: 1200,
        height: 1200,
        alt: "TrailTreeTrip Travel and Visa Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TrailTreeTrip | Visa & Travel Services in Bengaluru",
    description:
      "Professional visa assistance, passport services, flights, hotels, travel insurance and holiday packages.",
    images: ["/logo/trailtreetrip-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "/",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0Y1897XLSJ"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0Y1897XLSJ');
        `}
      </Script>
    </html>
  );
}