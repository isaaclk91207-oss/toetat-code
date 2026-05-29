import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <ContactForm />
      <ContactInfo />
    </>
  );
}

