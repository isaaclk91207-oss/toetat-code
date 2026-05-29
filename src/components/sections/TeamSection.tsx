"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { team } from "@/lib/constants/about";
import { fadeUp, smooth } from "@/lib/animations";
import type { TeamMember } from "@/types";

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...smooth, delay: index * 0.1 }}
    >
      <Card className="text-center" hover={false}>
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
          {initials}
        </div>
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {member.bio}
        </p>
      </Card>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          label="Team"
          title="Meet the People Behind the Code"
          description="A passionate team dedicated to building great software."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
