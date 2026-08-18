import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visa Consultant in Marathahalli | TrailTreeTrip",
  description:
    "TrailTreeTrip provides visa assistance, passport services, flight booking, hotels, travel insurance and holiday packages in Marathahalli, Bengaluru.",

  alternates: {
    canonical:
      "https://www.trailtreetrip.com/locations/marathahalli",
  },
};

export default function MarathahalliPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <Link
        href="/"
        className="text-blue-600 font-semibold"
      >
        ← Back to TrailTreeTrip
      </Link>

      <h1 className="text-5xl font-bold mt-8 mb-6">
        Visa Consultant and Travel Agency in Marathahalli
      </h1>

      <p className="text-xl leading-9">
        TrailTreeTrip provides professional visa assistance,
        passport services, international flight booking,
        hotels, travel insurance and customized holiday
        packages for customers in Marathahalli,
        Bengaluru.
      </p>

      <h2 className="text-3xl font-bold mt-16 mb-5">
        Our Services
      </h2>

      <ul className="space-y-3 text-lg">
        <li>✔ Tourist Visa</li>
        <li>✔ Business Visa</li>
        <li>✔ Family Visit Visa</li>
        <li>✔ Passport Services</li>
        <li>✔ Flight Booking</li>
        <li>✔ Hotel Booking</li>
        <li>✔ Travel Insurance</li>
        <li>✔ Holiday Packages</li>
      </ul>

      <h2 className="text-3xl font-bold mt-16 mb-5">
        Why Choose TrailTreeTrip?
      </h2>

      <ul className="space-y-3 text-lg">
        <li>✔ Personalized Visa Guidance</li>
        <li>✔ Transparent Documentation Support</li>
        <li>✔ Competitive Pricing</li>
        <li>✔ Fast Customer Support</li>
        <li>✔ Trusted Travel Partner</li>
      </ul>

    </main>
  );
}