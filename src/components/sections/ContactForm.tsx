"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, AlertCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeUp, smooth } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const err = await res.json();
        setError(err.error || "Failed to send message");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Section>
      <Container>
        <motion.div
          className="mx-auto max-w-2xl"
          variants={fadeUp}
          transition={smooth}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            description="Have a project in mind? We'd love to hear about it."
          />

          {isSubmitted ? (
            <div className="rounded-xl border border-border bg-surface p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Send size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="mt-3 text-sm text-muted">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={cn(
                      "mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm",
                      "placeholder:text-muted focus:border-primary focus:outline-none",
                    )}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={cn(
                      "mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm",
                      "placeholder:text-muted focus:border-primary focus:outline-none",
                    )}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                  className={cn(
                    "mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm",
                    "placeholder:text-muted focus:border-primary focus:outline-none resize-none",
                  )}
                  placeholder="Tell us about your project..."
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full md:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
