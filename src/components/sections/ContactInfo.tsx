"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { siteConfig } from "@/lib/constants/site";
import { fadeUp, smooth } from "@/lib/animations";

const contactItems = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Location", value: siteConfig.address },
];

const socialLinks = [
  { icon: Globe, label: "GitHub", href: siteConfig.social.github },
  { icon: Globe, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: Globe, label: "Twitter", href: siteConfig.social.twitter },
].filter((s) => s.href);

export default function ContactInfo() {
  return (
    <Section className="bg-surface">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl"
          variants={fadeUp}
          transition={smooth}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="text-center" hover={false}>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium">{item.value}</p>
                </Card>
              );

              return item.href ? (
                <Link key={item.label} href={item.href}>
                  {content}
                </Link>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Follow Us
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
