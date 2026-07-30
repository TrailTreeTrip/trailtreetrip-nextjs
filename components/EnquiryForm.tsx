"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export default function EnquiryForm() {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const enquiry = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    setStatus({
      type: "loading",
      message: "Sending your enquiry...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your enquiry.");
      }

      form.reset();

      setStatus({
        type: "success",
        message:
          "Thank you. Your enquiry has been sent successfully. TrailTreeTrip will contact you shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your enquiry. Please contact us by phone or WhatsApp.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[2rem] bg-white p-7 text-slate-900 shadow-2xl sm:grid-cols-2 sm:p-9"
    >
      <label className="form-label">
        Full Name
        <input
          required
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your full name"
        />
      </label>

      <label className="form-label">
        Phone Number
        <input
          required
          type="tel"
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
        />
      </label>

      <label className="form-label">
        Email Address
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
        />
      </label>

      <label className="form-label">
        Service Required
        <select required name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option value="Visa Assistance">Visa Assistance</option>
          <option value="Passport Services">Passport Services</option>
          <option value="Flight Booking">Flight Booking</option>
          <option value="Hotels and Holiday Packages">
            Hotels &amp; Holiday Packages
          </option>
          <option value="Travel Insurance">Travel Insurance</option>
          <option value="Corporate Travel">Corporate Travel</option>
          <option value="Other Travel Service">Other</option>
        </select>
      </label>

      <label className="form-label sm:col-span-2">
        Message
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Please mention your destination, travel dates, number of travellers and service required"
        />
      </label>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="primary-button sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.type === "loading" ? "Sending Enquiry..." : "Send Enquiry"}
      </button>

      {status.message && (
        <p
          aria-live="polite"
          className={`text-sm font-semibold sm:col-span-2 ${
            status.type === "success"
              ? "text-green-700"
              : status.type === "error"
                ? "text-red-700"
                : "text-slate-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}