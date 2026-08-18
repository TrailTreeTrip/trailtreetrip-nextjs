import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clock,
  FileCheck2,
  Globe2,
  Hotel,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
} from "lucide-react";

import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Visa Consultant in Bellandur, Bengaluru",
  description:
    "TrailTreeTrip provides tourist visa, business visa, family visit visa, passport, flight, hotel, travel insurance and holiday package assistance for customers in Bellandur, Bengaluru.",

  keywords: [
    "visa consultant Bellandur",
    "travel agency Bellandur",
    "passport services Bellandur",
    "visa consultant near Bellandur",
    "travel agency near Bellandur",
    "Schengen visa consultant Bellandur",
    "Singapore visa Bellandur",
    "Dubai visa Bellandur",
    "flight booking Bellandur",
    "holiday packages Bellandur",
  ],

  alternates: {
    canonical: "/locations/bellandur",
  },

  openGraph: {
    title: "Visa Consultant in Bellandur | TrailTreeTrip",
    description:
      "Professional visa, passport and travel assistance for customers in Bellandur, Bengaluru.",
    url: "https://www.trailtreetrip.com/locations/bellandur",
    siteName: "TrailTreeTrip",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/trailtreetrip-logo.png",
        width: 1200,
        height: 1200,
        alt: "TrailTreeTrip Visa Consultant in Bellandur",
      },
    ],
  },
};

const services = [
  {
    icon: FileCheck2,
    title: "Visa Assistance",
    description:
      "Guidance for tourist, business, family visit and other eligible visa applications.",
  },
  {
    icon: ShieldCheck,
    title: "Passport Services",
    description:
      "Support for new passport applications, renewals, corrections and document preparation.",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Domestic and international flight options based on your dates, route and budget.",
  },
  {
    icon: Hotel,
    title: "Hotels and Holidays",
    description:
      "Hotel reservations and customized holiday packages for individuals, families and groups.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Travel",
    description:
      "Visa documentation, flights, hotels and itinerary coordination for business travellers.",
  },
  {
    icon: Globe2,
    title: "Travel Insurance",
    description:
      "Travel medical and trip protection assistance suitable for international journeys.",
  },
];

const faqs = [
  {
    question: "Where is TrailTreeTrip located near Bellandur?",
    answer:
      "TrailTreeTrip is located at 11th Floor, No. 32/2, Prestige Tech Platina, Innov8, 34/1, Kadubeesanahalli, Bengaluru, Karnataka 560087, conveniently accessible from Bellandur.",
  },
  {
    question: "Do you provide visa assistance for customers in Bellandur?",
    answer:
      "Yes. Customers from Bellandur and nearby areas can contact TrailTreeTrip for tourist, business and family visit visa assistance, passport support and complete travel services.",
  },
  {
    question: "Which visa services are available?",
    answer:
      "We assist with tourist, business and family visit visa documentation for eligible destinations. Requirements depend on the country, applicant profile and purpose of travel.",
  },
  {
    question: "Can you help with passport renewal?",
    answer:
      "Yes. We assist with passport renewals, reissue applications, document preparation and appointment guidance.",
  },
  {
    question: "Do you provide flight, hotel and insurance services?",
    answer:
      "Yes. TrailTreeTrip provides flight booking, hotel reservation, travel insurance and customized holiday package assistance.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer:
      "No agency can guarantee visa approval. Final decisions are made only by the relevant embassy, consulate or immigration authority.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://www.trailtreetrip.com/#business",
      name: "TrailTreeTrip Travel & Visa Company",
      alternateName: "TrailTreeTrip",

      url: "https://www.trailtreetrip.com",
      logo: "https://www.trailtreetrip.com/logo/trailtreetrip-logo.png",
      image: "https://www.trailtreetrip.com/logo/trailtreetrip-logo.png",

      description:
        "TrailTreeTrip provides visa, passport, flight, hotel, travel insurance and holiday package assistance for customers in Bellandur and nearby Bengaluru areas.",

      telephone: "+919663742708",
      email: "info@trailtreetrip.com",
      priceRange: "₹₹",

      address: {
        "@type": "PostalAddress",
        streetAddress:
          "11th Floor, No. 32/2, Prestige Tech Platina, Innov8, 34/1, Kadubeesanahalli",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560087",
        addressCountry: "IN",
      },

      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9437078,
        longitude: 77.6958614,
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "16:00",
        },
      ],

      areaServed: [
        "Bellandur",
        "Kadubeesanahalli",
        "Marathahalli",
        "Devarabisanahalli",
        "Sarjapur Road",
        "HSR Layout",
        "Bengaluru",
      ],

      sameAs: [
        "https://www.facebook.com/profile.php?id=61588764082267",
        "https://www.instagram.com/trailtreetrip/",
      ],
    },

    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default function BellandurPage() {
  const phone = "+91 96637 42708";
  const whatsapp = "919663742708";
  const email = "info@trailtreetrip.com";

  const googleMaps =
    "https://www.google.com/maps/place/TrailTreeTrip/@12.9437078,77.6958614,17z";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <main className="bg-white text-slate-900">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="container-shell flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/trailtreetrip-logo.png"
                alt="TrailTreeTrip Travel and Visa Company"
                width={64}
                height={64}
                priority
                className="h-16 w-16 rounded-xl object-contain"
              />

              <span>
                <strong className="block text-xl text-slate-900">
                  TrailTreeTrip
                </strong>

                <small className="block uppercase tracking-[0.16em] text-slate-500">
                  Travel and Visa Company
                </small>
              </span>
            </Link>

            <div className="hidden items-center gap-5 md:flex">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="font-semibold text-slate-700"
              >
                {phone}
              </a>

              <a href="#enquiry" className="primary-button py-3">
                Request Assistance
              </a>
            </div>
          </div>
        </header>

        <section className="hero-pattern overflow-hidden">
          <div className="container-shell grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <Link
                href="/"
                className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-teal-700"
              >
                <ArrowLeft size={17} />
                Back to TrailTreeTrip
              </Link>

              <span className="eyebrow">
                Travel and Visa Services in East Bengaluru
              </span>

              <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-tight text-slate-950 sm:text-6xl">
                Visa Consultant and Travel Agency in Bellandur
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                TrailTreeTrip provides professional visa assistance, passport
                support, flights, hotels, travel insurance and customized
                holiday packages for customers in Bellandur, Bengaluru.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#enquiry" className="primary-button">
                  Get Visa Assistance
                  <ChevronRight size={18} />
                </a>

                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                    "Hello TrailTreeTrip, I need visa or travel assistance in Bellandur.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-2">
                  <Check size={17} className="text-teal-600" />
                  Local Bengaluru support
                </span>

                <span className="flex items-center gap-2">
                  <Check size={17} className="text-teal-600" />
                  Personalized document guidance
                </span>

                <span className="flex items-center gap-2">
                  <Check size={17} className="text-teal-600" />
                  Visa and complete travel services
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-teal-200/50 blur-3xl" />

              <div className="relative rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-10">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-400">
                  TrailTreeTrip – Serving Bellandur
                </span>

                <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
                  Complete travel support close to your workplace and home
                </h2>

                <div className="mt-7 space-y-5 text-slate-200">
                  <p className="flex gap-3">
                    <FileCheck2
                      className="mt-0.5 shrink-0 text-teal-400"
                      size={20}
                    />
                    Tourist, business and family visit visa assistance
                  </p>

                  <p className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 shrink-0 text-teal-400"
                      size={20}
                    />
                    Passport application and renewal support
                  </p>

                  <p className="flex gap-3">
                    <Plane
                      className="mt-0.5 shrink-0 text-teal-400"
                      size={20}
                    />
                    International and domestic flight bookings
                  </p>

                  <p className="flex gap-3">
                    <Hotel
                      className="mt-0.5 shrink-0 text-teal-400"
                      size={20}
                    />
                    Hotels, travel insurance and holiday packages
                  </p>
                </div>

                <a
                  href={googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-teal-300"
                >
                  <MapPin size={18} />
                  View nearby TrailTreeTrip office
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell">
            <div className="section-heading">
              <span className="eyebrow">Our Services</span>

              <h2>
                Visa, passport and travel services for Bellandur
              </h2>

              <p>
                Get support for your documentation and complete travel
                arrangements from one team.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="icon-box">
                    <Icon size={25} />
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {description}
                  </p>

                  <a
                    href="#enquiry"
                    className="mt-5 inline-flex items-center gap-2 font-bold text-teal-700"
                  >
                    Request assistance
                    <ChevronRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-slate-50">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Local Travel Support</span>

              <h2 className="heading-large mt-4">
                Convenient assistance for Bellandur travellers
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Customers from Bellandur can conveniently access
                TrailTreeTrip&apos;s visa and travel assistance from our nearby
                Kadubeesanahalli office. We also serve Marathahalli,
                Devarabisanahalli, Sarjapur Road, HSR Layout and surrounding
                East and South Bengaluru areas.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Bellandur",
                  "Kadubeesanahalli",
                  "Marathahalli",
                  "Devarabisanahalli",
                  "Sarjapur Road",
                  "HSR Layout",
                ].map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <MapPin size={18} className="text-teal-600" />
                    <span className="font-semibold">{location}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=TrailTreeTrip%20Kadubeesanahalli%20Bengaluru&output=embed"
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TrailTreeTrip office near Bellandur"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid gap-12 lg:grid-cols-[1fr_.85fr]">
            <div>
              <span className="eyebrow">Business Information</span>

              <h2 className="heading-large mt-4">
                Visit or contact TrailTreeTrip
              </h2>

              <div className="mt-8 space-y-5 text-slate-700">
                <p className="flex gap-3">
                  <MapPin className="shrink-0 text-teal-600" />
                  11th Floor, No. 32/2, Prestige Tech Platina, Innov8,
                  34/1, Kadubeesanahalli, Bengaluru, Karnataka 560087
                </p>

                <p className="flex gap-3">
                  <MessageCircle className="shrink-0 text-teal-600" />
                  {phone}
                </p>

                <p className="flex gap-3">
                  <Globe2 className="shrink-0 text-teal-600" />
                  {email}
                </p>

                <p className="flex gap-3">
                  <Clock className="shrink-0 text-teal-600" />
                  Monday–Friday: 9:00 AM–6:00 PM
                  <br />
                  Saturday: 9:00 AM–4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <aside className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-cyan-900 p-8 text-white shadow-xl">
              <h2 className="font-serif text-3xl font-bold">
                Why choose TrailTreeTrip?
              </h2>

              <div className="mt-7 space-y-5 text-slate-200">
                {[
                  "Clear document guidance",
                  "Support through phone, email and WhatsApp",
                  "Visa and complete travel assistance",
                  "Convenient East Bengaluru location",
                  "Personalized service based on your profile",
                ].map((item) => (
                  <p key={item} className="flex gap-3">
                    <Check
                      size={19}
                      className="mt-0.5 shrink-0 text-teal-300"
                    />
                    {item}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section
          id="enquiry"
          className="section-space scroll-mt-24 bg-gradient-to-br from-slate-950 to-cyan-900 text-white"
        >
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="eyebrow text-teal-300">
                Visa and Travel Enquiry
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                Tell us what assistance you need
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Share your destination, travel dates, number of travellers and
                service requirement. Our team will contact you with the
                recommended next steps.
              </p>

              <div className="mt-8 space-y-4 text-slate-200">
                <p className="flex items-center gap-3">
                  <MessageCircle className="text-teal-300" />
                  {phone}
                </p>

                <p className="flex items-center gap-3">
                  <MapPin className="text-teal-300" />
                  Serving Bellandur from our Kadubeesanahalli office
                </p>
              </div>
            </div>

            <EnquiryForm />
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell max-w-4xl">
            <div className="section-heading">
              <span className="eyebrow">Frequently Asked Questions</span>
              <h2>Local visa and travel questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                    {question}

                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 leading-7 text-slate-600">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 py-12 text-slate-300">
          <div className="container-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/trailtreetrip-logo.png"
                alt="TrailTreeTrip"
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl bg-white object-contain"
              />

              <div>
                <strong className="block text-lg text-white">
                  TrailTreeTrip
                </strong>
                <span className="text-sm">Travel & Visa Company</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 text-sm">
              <Link href="/">Home</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#destinations">Destinations</Link>
              <Link href="/#enquiry">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}