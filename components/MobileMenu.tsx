"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="rounded-xl border border-slate-200 p-3 text-slate-800"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-20 flex flex-col gap-5 border-b border-slate-200 bg-white p-6 font-semibold shadow-xl">
          {[
            ["Services", "#services"],
            ["Destinations", "#destinations"],
            ["About", "#about"],
            ["FAQ", "#faq"],
            ["Enquire Now", "#enquiry"]
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
