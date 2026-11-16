"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

type SubmissionState = "idle" | "submitting" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };
      setState("error");
      setMessage(result.message ?? "Your enquiry could not be sent. Please contact us by phone or email.");
    } catch {
      setState("error");
      setMessage("We couldn’t connect to the enquiry service. Please contact us by phone or email.");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Full name<input name="name" autoComplete="name" required maxLength={120} /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      </div>
      <div className="form-row">
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" required maxLength={40} /></label>
        <label>Enquiry type
          <select name="type" defaultValue="" required>
            <option value="" disabled>Select a service area</option>
            <option value="construction">Construction</option>
            <option value="cleaning">Cleaning</option>
            <option value="other">Other enquiry</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>Service required<input name="service" required maxLength={120} placeholder="e.g. Commercial cleaning" /></label>
        <label>Project location<input name="location" required maxLength={160} placeholder="Town or postcode" /></label>
      </div>
      <label>Estimated project budget <span className="optional">(optional)</span>
        <select name="budget" defaultValue="">
          <option value="">Prefer not to say</option>
          <option value="under-5k">Under £5,000</option>
          <option value="5k-25k">£5,000–£25,000</option>
          <option value="25k-100k">£25,000–£100,000</option>
          <option value="over-100k">Over £100,000</option>
        </select>
      </label>
      <label>How can we help?<textarea name="message" rows={5} required maxLength={3000} placeholder="Share a few details about what you need." /></label>
      <p className="privacy-note">Please don’t include sensitive personal information in your message.</p>
      <button className="button button-navy form-submit" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? <>Checking enquiry <LoaderCircle size={16} className="spinner" /></> : <>Send enquiry <ArrowRight size={16} /></>}
      </button>
      <p className={`form-status${state === "error" ? " form-status-error" : ""}`} aria-live="polite">
        {state === "error" ? message : state === "idle" ? "Online submission is not yet available. Your details will not be transmitted." : "Checking the enquiry service…"}
      </p>
    </form>
  );
}
