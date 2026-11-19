"use client";

import { useState, type FormEvent, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/Icons";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { hasWhatsApp, whatsappLink } from "@/lib/whatsapp";
import { buttonClass } from "@/lib/button";
import { contactBudgets, contactServices } from "@/lib/data";
import { easeOut } from "@/lib/motion";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-ink/80 px-4 py-3 text-bone placeholder:text-mist/60 transition-colors focus:border-tritium/70 focus:outline-none focus:ring-2 focus:ring-tritium/20";

const labelClass =
  "mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-mist";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(
          json.error ?? "Something went wrong. Please try again.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  function sendOnWhatsApp(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form) return;

    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const details = [
      field("name") && `Name: ${field("name")}`,
      field("company") && `Company: ${field("company")}`,
      field("service") && `Service: ${field("service")}`,
      field("budget") && `Budget: ${field("budget")}`,
      field("message") && `Details: ${field("message")}`,
    ].filter(Boolean);

    const message = [
      "Hello Tritium Tech Solutions, I would like to discuss a project.",
      details.join("\n"),
    ]
      .filter(Boolean)
      .join("\n\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-panel/60 p-6 backdrop-blur-sm sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
            role="status"
          >
            <div className="grid size-20 place-items-center rounded-full bg-linear-to-br from-tritium to-plasma text-void shadow-[0_0_48px_-4px_var(--glow)]">
              <Icon name="check" className="size-10" />
            </div>
            <h2 className="mt-8 font-display text-3xl font-semibold text-bone">
              Message received
            </h2>
            <p className="mt-3 max-w-sm leading-relaxed text-mist">
              Thank you for reaching out. We will reply with next steps within
              24 hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className={buttonClass("ghost", "mt-8")}
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
            noValidate={false}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                maxLength={80}
                autoComplete="organization"
                placeholder="Optional"
                className={fieldClass}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className={labelClass}>
                  I need help with
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue={contactServices[0]}
                  className={fieldClass}
                >
                  {contactServices.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue={contactBudgets[contactBudgets.length - 1]}
                  className={fieldClass}
                >
                  {contactBudgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Project details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={4000}
                rows={6}
                placeholder="Tell us about your idea, goals and timeline..."
                className={`${fieldClass} resize-y`}
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {status === "error" && (
              <p
                role="alert"
                className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300"
              >
                {error}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className={buttonClass("primary", "w-full sm:w-auto")}
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <Icon name="arrow-up-right" className="size-4" />
              </button>
              {hasWhatsApp && (
                <button
                  type="button"
                  onClick={sendOnWhatsApp}
                  className={buttonClass("ghost", "w-full sm:w-auto")}
                >
                  <WhatsAppIcon className="size-5 text-[#25D366]" />
                  Send on WhatsApp
                </button>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
