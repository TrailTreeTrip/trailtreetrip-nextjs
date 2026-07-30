import {
    BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  CircleHelp,
  FileCheck2,
  Globe2,
  Hotel,
  MapPin,
  Menu,
  MessageCircle,
  Quote,
  Plane,
  ShieldCheck,
  Star,
  TicketCheck
} from "lucide-react";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import MobileMenu from "@/components/MobileMenu";

const services = [
  {
    icon: FileCheck2,
    title: "Visa Assistance",
    description:
      "Guidance for tourist, business, student and family visit visa applications."
  },
  {
    icon: BadgeCheck,
    title: "Passport Services",
    description:
      "Support for new applications, renewals, corrections and appointment preparation."
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Domestic and international itinerary options tailored to your travel plans."
  },
  {
    icon: Hotel,
    title: "Hotels & Holidays",
    description:
      "Hotel reservations and customized packages for individuals, families and groups."
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    description:
      "Travel medical and trip protection plans suitable for visa and travel needs."
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Travel",
    description:
      "Business travel coordination, visa support and itinerary management."
  }
];

const destinations = [
  {
    flag: "🇸🇬",
    country: "Singapore",
    type: "Tourist, business and family visit visa assistance",
    image: "/destinations/singapore.png",
  },
  {
    flag: "🇲🇾",
    country: "Malaysia",
    type: "Tourist, business and family visit visa assistance",
    image: "/destinations/malaysia.png",
  },
  {
    flag: "🇹🇭",
    country: "Thailand",
    type: "Tourist, business and family visit visa assistance",
    image: "/destinations/thailand.png",
  },
  {
    flag: "🇦🇪",
    country: "Dubai (UAE)",
    type: "Tourist, business and family visit visa assistance",
    image: "/destinations/dubai.png",
  },
  {
    flag: "🇪🇺",
    country: "Schengen Europe",
    type: "Tourist, business and family visit visa assistance",
    image: "/destinations/schengen-europe.png",
  },
  {
    flag: "🇰🇷",
    country: "South Korea",
    type: "Tourist, business and family visit visa assistance",
    image: "/destinations/south-korea.png",
  },
];

const faqs = [
  [
    "What services does TrailTreeTrip provide?",
    "TrailTreeTrip offers tourist visas, business visas, family visit visas, passport services, international and domestic flight bookings, hotel reservations, travel insurance and customized holiday packages.",
  ],

  [
    "Do you assist with tourist, business and family visit visas?",
    "Yes. We provide complete guidance for tourist, business, family visit and other eligible visa categories based on the destination country's official requirements.",
  ],

  [
    "Can you help with passport applications and renewals?",
    "Yes. We assist with new passport applications, renewals, re-issue, Tatkal guidance and document preparation.",
  ],

  [
    "Which documents are required for a visa application?",
    "Required documents depend on your destination, travel purpose and personal profile. We provide a personalized document checklist before you submit your application.",
  ],

  [
    "How long does the visa process take?",
    "Processing time varies by country, embassy workload and application type. We always recommend applying well in advance of your planned travel dates.",
  ],

  [
    "Can customers outside Bengaluru use your services?",
    "Yes. Many of our consultation, documentation and coordination services can be provided remotely across India. Only embassy-specific appointments or biometrics require physical attendance.",
  ],

  [
    "Do you also arrange flights, hotels and travel insurance?",
    "Yes. We provide complete travel solutions including flights, hotel bookings, travel insurance and customized holiday packages.",
  ],

  [
    "Do you guarantee visa approval?",
    "No travel agency can guarantee visa approval. Final decisions are made solely by the respective embassy, consulate or immigration authority. We focus on preparing accurate applications to maximize your chances of success.",
  ],
];
const testimonials = [
  {
    name: "Schengen Visa Customer",
    service: "Schengen Visa Assistance",
    review:
      "International travel was made easy and effortless. TrailTreeTrip provided clear guidance throughout the Schengen visa process.",
  },
  {
    name: "Passport & US Visa Customer",
    service: "Passport Renewal and US Visa",
    review:
      "Excellent support for passport renewal and US visa processing. The team was professional and helpful throughout the process.",
  },
  {
    name: "France Visa Customer",
    service: "France Visa Assistance",
    review:
      "The documentation process was explained clearly, and we received timely support throughout our France visa application.",
  },
];
export default function HomePage() {
  
  const phone = process.env.NEXT_PUBLIC_PHONE || "+91 96637 42708";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "919663742708";
  const email = process.env.NEXT_PUBLIC_EMAIL || "info@trailtreetrip.com";

  const address =
    "11th Floor, No. 32/2, Prestige Tech Platina, Innov8, 34/1, Kadabisanahalli, Bengaluru, Karnataka 560087";

  const googleMaps =
    "https://www.google.com/maps/place/TrailTreeTrip/@12.9437078,77.6958614,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae13a7ca8dc0d3:0xa28c075876ec7aa3!8m2!3d12.9437078!4d77.6958614!16s%2Fg%2F11npwdb6d4";

  const facebook =
    "https://www.facebook.com/profile.php?id=61588764082267";

  const instagram =
    "https://www.instagram.com/trailtreetrip/";
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://www.trailtreetrip.com/#business",
    name: "TrailTreeTrip Travel & Visa Company",
    alternateName: "TrailTreeTrip",
    description:
      "TrailTreeTrip provides professional visa assistance, passport services, flight booking, hotel reservations, travel insurance and customized holiday packages in Bengaluru.",
    url: "https://www.trailtreetrip.com",
    logo: "https://www.trailtreetrip.com/trailtreetrip-logo.png",
    image: "https://www.trailtreetrip.com/trailtreetrip-logo.png",
    telephone: "+919663742708",
    email: "info@trailtreetrip.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "11th Floor, No. 32/2, Prestige Tech Platina, Innov8, 34/1, Kadabisanahalli",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560087",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bengaluru",
      },
      {
        "@type": "State",
        name: "Karnataka",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    sameAs: [
      "https://www.facebook.com/share/16rVYDWuZ4/",
      "https://www.instagram.com/trailtreetrip",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919663742708",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Tamil", "Kannada"],
    },
    knowsAbout: [
      "Tourist visa assistance",
      "Business visa assistance",
      "Family visit visa assistance",
      "Passport application and renewal",
      "International flight booking",
      "Domestic flight booking",
      "Hotel reservations",
      "Travel insurance",
      "Holiday packages",
    ],
  };
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
      }}
    />
    
    <main>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="TrailTreeTrip home">
         <Image
  src="/trailtreetrip-logo.png" alt="TrailTreeTrip Travel & Visa Company" width={64} height={64} priority
  className="rounded-xl h-16 w-16 object-contain"/>
          
            <span>
              <strong className="block text-xl text-slate-900">TrailTreeTrip</strong>
              <small className="block uppercase tracking-[0.18em] text-slate-500">
                Travel and Visa Company
              </small>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#home">Home</a>
<a href="#services">Visa Services</a>
<a href="#destinations">Holiday Packages</a>
<a href="#flights">Flights</a>
<a href="#about">About Us</a>
<a href="#enquiry">Contact</a>
            <a href="#enquiry" className="primary-button py-3">
              Enquire Now
            </a>
          </nav>

          <MobileMenu />
        </div>
      </header>

      <section id="home" className="hero-pattern overflow-hidden">
        <div className="container-shell grid min-h-[720px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <span className="eyebrow">Visa & Travel Experts in Bengaluru</span>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-[1.04] text-slate-950 sm:text-6xl lg:text-7xl">
              Your Trusted Visa Consultant & Travel Agency in Bengaluru
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
  TrailTreeTrip provides professional tourist, business and family visit visa
  assistance, passport services, flight bookings, hotel reservations, travel
  insurance and customized holiday packages. We help individuals, families and
  businesses travel with confidence.
</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#enquiry" className="primary-button">
                Get Free Visa Consultation
                <ChevronRight size={18} />
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              {[
  "Trusted Travel & Visa Consultants",
  "Tourist, Business & Family Visit Visas",
  "Flights, Hotels & Travel Insurance",
  "Personalized Support from Start to Finish",
].map(
                item => (
                  <span key={item} className="flex items-center gap-2">
                    <Check size={17} className="text-teal-600" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/70 to-teal-200/70 blur-2xl" />
            <div className="relative rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-400">
                TRAVEL, VISA & PASSPORT SERVICES
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
                Complete support for your international journey
              </h2>
              <div className="mt-7 space-y-5">
                {[
                  "Tourist, business and family visit visas",
                  "Passport application and renewal support",
                  "International and domestic flight bookings",
                  "Travel insurance and hotel reservations",
                  "Customized holidays and corporate travel"
                ].map(item => (
                  <div key={item} className="flex gap-3 text-slate-200">
                    <TicketCheck className="mt-0.5 shrink-0 text-teal-400" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#services" className="mt-8 inline-flex items-center gap-2 font-bold text-teal-300">
                Explore all services <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white py-8">
  <div className="container-shell grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
    <div>
      <p className="text-3xl font-bold text-slate-900">Professional</p>
      <p className="mt-1 text-sm text-slate-600">
        Visa and travel guidance
      </p>
    </div>

    <div>
      <p className="text-3xl font-bold text-slate-900">Global</p>
      <p className="mt-1 text-sm text-slate-600">
        International travel support
      </p>
    </div>

    <div>
      <p className="text-3xl font-bold text-slate-900">Transparent</p>
      <p className="mt-1 text-sm text-slate-600">
        Clear documentation assistance
      </p>
    </div>

    <div>
      <p className="text-3xl font-bold text-slate-900">Responsive</p>
      <p className="mt-1 text-sm text-slate-600">
        Phone and WhatsApp support
      </p>
    </div>
  </div>
</section>

      <section id="services" className="section-space">
        <div className="container-shell">
          <div className="section-heading">
            <span className="eyebrow">Our Services</span>
            <h2>Travel support built around your needs</h2>
            <p>Choose the service you need and our team will guide you through each stage.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
                <article
  key={title}
  id={title === "Flight Booking" ? "flights" : undefined}
  className="service-card scroll-mt-28"
>
                <span className="icon-box"><Icon size={25} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#enquiry">Request assistance <ChevronRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="section-space bg-slate-50">
        <div className="container-shell">
          <div className="section-heading">
            <span className="eyebrow">Popular Destinations</span>
            <h2>Visa support for leading global destinations</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map(({ flag, country, type, image }) => (
              <article
  key={country}
  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-400 hover:shadow-xl"
>
  <div className="relative mb-3 h-56 overflow-hidden rounded-2xl bg-slate-100 px-2">
  <Image
    src={image}
    alt={`${country} visa and travel services`}
    fill
    className="object-contain transition duration-500 group-hover:scale-105"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  />
</div>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">
  {country}
</h3>
                <p className="mt-2 leading-7 text-slate-600">
  {type}
</p>

<a
  href="#enquiry"
  className="mt-5 inline-flex items-center gap-2 font-bold text-teal-700"
>
  Get visa assistance
  <ChevronRight className="h-4 w-4" />
</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-space">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">
          <div>
            <span className="eyebrow">Why TrailTreeTrip</span>
            <h2 className="heading-large"> Reliable support throughout your travel journey</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
  TrailTreeTrip provides clear guidance for visa documentation,
  passport services, flights, hotels, travel insurance and customized
  holiday planning for individuals, families and businesses.
</p>
            <div className="mt-9 grid gap-5">
              {[
  [
    "Clear guidance",
    "Step-by-step assistance throughout the travel and visa process.",
  ],
  [
    "Responsive support",
    "Easy communication through phone, email and WhatsApp.",
  ],
  [
    "Tailored solutions",
    "Recommendations based on your destination, travel purpose and requirements.",
  ],
].map(([title, text]) => (
                <div key={title} className="border-l-4 border-teal-500 pl-5">
                  <strong className="block text-slate-900">{title}</strong>
                  <span className="text-sm text-slate-500">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-cyan-900 p-9 text-white shadow-2xl">
            <Star className="text-amber-400" fill="currentColor" />
            <p className="mt-6 font-serif text-3xl leading-snug">
  “Clear guidance, transparent communication and responsive travel support.”
</p>

<span className="mt-6 block text-sm text-slate-300">
  The TrailTreeTrip Service Commitment
</span>
          </aside>
        </div>
      </section>

      <section id="enquiry" className="section-space bg-gradient-to-br from-slate-950 to-cyan-900 text-white">
        <div className="container-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="eyebrow text-teal-300">Start Your Journey</span>
            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Tell us what you need
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Share your destination, travel date and requirement. Our team can
              contact you with the recommended next steps.
            </p>

            <div className="mt-9 space-y-4 text-slate-200">
              <p className="flex gap-3"><MessageCircle className="text-teal-300" /> {phone}</p>
              <p className="flex gap-3"><Globe2 className="text-teal-300" /> {email}</p>
              <p className="flex gap-3"><MapPin className="text-teal-300" /> 11th Floor, No. 32/2, Prestige Tech Platina, Innov8, 34/1, Kadabisanahalli, Bengaluru, Karnataka 560087</p>
              <a
  href={googleMaps}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-flex items-center gap-2 rounded-xl border border-teal-300 px-5 py-3 font-semibold text-teal-200 transition hover:bg-white hover:text-slate-950"
>
  <MapPin className="h-5 w-5" />
  View on Google Maps
</a>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
  <iframe
    src="https://www.google.com/maps?q=TrailTreeTrip%20Kadubeesanahalli%20Bengaluru&output=embed"
    width="100%"
    height="300"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="TrailTreeTrip Location"
    className="w-full"
  />
</div>

          <EnquiryForm />
        </div>
      </section>
      <section id="reviews" className="section-space bg-slate-50">
  <div className="container-shell">
    <div className="section-heading">
      <span className="eyebrow">Customer Experiences</span>

      <h2>What our customers say</h2>

      <p>
        Feedback from customers who trusted TrailTreeTrip for visas,
        passports and travel services.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map(({ name, service, review }) => (
        <article
          key={name}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold">{name}</h3>

          <p className="text-sm text-teal-600 mt-1">
            {service}
          </p>

          <div className="mt-4">
  <Quote
    size={28}
    className="mb-3 text-teal-500 opacity-70"
  />

  <p className="leading-7 text-slate-600 italic">
    {review}
  </p>
</div>
        </article>
      ))}
    </div>
  </div>
</section>
      <section id="faq" className="section-space">
        <div className="container-shell max-w-4xl">
          <div className="section-heading">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Common questions from travellers</h2>
          </div>

          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span className="flex items-center gap-3">
                    <CircleHelp size={20} className="text-teal-600" />
                    {question}
                  </span>
                  <span className="text-xl transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 pl-8 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-400 py-12">
        <div className="container-shell flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-800">Ready to travel?</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-950 sm:text-4xl">
              Let TrailTreeTrip simplify your journey.
            </h2>
          </div>
          <a href="#enquiry" className="rounded-xl bg-white px-6 py-4 font-bold text-slate-950">
            Speak to Our Team
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 py-16 text-slate-400">
        <div className="container-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-800 text-sm font-black text-white">TTT</span>
              <strong className="text-xl text-white">TrailTreeTrip</strong>
            </div>
            <p className="mt-5 text-sm leading-7">Visa assistance, passports, flights, hotels, insurance and holidays from Bengaluru.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Services</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a className="block" href="#services">Visa Assistance</a>
              <a className="block" href="#services">Passport Services</a>
              <a className="block" href="#services">Flight Booking</a>
              <a className="block" href="#services">Holiday Packages</a>
            </div>
          </div>
          <div>
  <h3 className="font-bold text-white">Company</h3>

  <div className="mt-4 space-y-3 text-sm">
    <a className="block transition hover:text-white" href="#about">
      About Us
    </a>

    <a className="block transition hover:text-white" href="#faq">
      FAQ
    </a>

    <a className="block transition hover:text-white" href="#enquiry">
      Contact
    </a>

    <a
      className="block transition hover:text-white"
      href={googleMaps}
      target="_blank"
      rel="noopener noreferrer"
    >
      Google Maps
    </a>

    <a
      className="block transition hover:text-white"
      href={facebook}
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>

    <a
      className="block transition hover:text-white"
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>
  </div>
</div>
          <div>
  <h3 className="font-bold text-white">Contact</h3>

  <div className="mt-4 space-y-3 text-sm">
    <a
      className="block transition hover:text-white"
      href={`tel:${phone.replace(/\s/g, "")}`}
    >
      {phone}
    </a>

    <a
  className="block transition hover:text-white"
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  {email}
</a>

    <a
      className="block leading-6 transition hover:text-white"
      href={googleMaps}
      target="_blank"
      rel="noopener noreferrer"
    >
      11th Floor, No. 32/2, Prestige Tech Platina, Innov8, 34/1,
      Kadabisanahalli, Bengaluru, Karnataka 560087
    </a>
  </div>
</div>
        </div>
        <div className="container-shell mt-12 border-t border-white/10 pt-6 text-sm">
          © {new Date().getFullYear()} TrailTreeTrip Travel & Visa Company. All rights reserved.
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with TrailTreeTrip on WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-green-500 text-white shadow-xl"
      >
        <MessageCircle />
      </a>
    </main>
    </>
  );
}
