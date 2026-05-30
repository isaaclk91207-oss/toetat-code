import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { navLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";

const LOGO_URL =
  "https://www.image2url.com/r2/default/images/1780122685294-0673266a-3779-4d8f-b63f-179eef1104ba.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={LOGO_URL}
                alt="ToeTat Solution Hub"
                width={180}
                height={54}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Social
            </h3>
            <ul className="space-y-3">
              {siteConfig.social.github && (
                <li>
                  <Link
                    href={siteConfig.social.github}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </li>
              )}
              {siteConfig.social.linkedin && (
                <li>
                  <Link
                    href={siteConfig.social.linkedin}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
              )}
              {siteConfig.social.twitter && (
                <li>
                  <Link
                    href={siteConfig.social.twitter}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted">
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
