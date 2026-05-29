import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return <ServicesGrid />;
}
