import Link from "next/link";
import { cv } from "@/content/documents";
import { profile } from "@/content/profile";
import { Icon } from "./icon";

export function DownloadCv({ primary = false }: { primary?: boolean }) {
  return (
    <a className={primary ? "button button-primary" : "button button-secondary"} href={cv.href} download={cv.filename}>
      <Icon name="download" /> Download CV
    </a>
  );
}

export function SocialLinks() {
  return (
    <ul className="social-links" aria-label="Professional profiles">
      <li><a href={profile.github}><Icon name="github" /> GitHub <Icon name="external" className="social-arrow" /></a></li>
      <li><a href={profile.linkedin}><Icon name="linkedin" /> LinkedIn <Icon name="external" className="social-arrow" /></a></li>
    </ul>
  );
}

export function Contact() {
  return (
    <section className="shell contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <h2 id="contact-title">Get in touch</h2>
          <p>I’m looking for Werkstudent and part-time IT roles in Germany. If you’d like to discuss a role or ask about my work, you can reach me by email.</p>
        </div>
        <div className="contact-actions">
          <a className="button button-light" href={`mailto:${profile.email}`}><Icon name="email" /> {profile.email}</a>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="footer-name" href="/">{profile.name}</Link>
        <span>{profile.location}</span>
        <Link href="/#contact" className="text-link">Contact <Icon name="external" /></Link>
      </div>
    </footer>
  );
}
