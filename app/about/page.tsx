import Image from "next/image";
import Link from "next/link";
import { DownloadCv, SocialLinks } from "@/components/links";
import { Icon } from "@/components/icon";
import { Timeline } from "@/components/timeline";
import { education, experience, profile, volunteering } from "@/content/profile";
import { pageMetadata } from "@/content/site";

export const metadata = pageMetadata(
  "About",
  "Meet Saeed and learn about his software development work, computer science education, master’s studies and volunteering.",
  "/about",
);

export default function About() {
  return (
    <div className="shell interior">
      <section className="about-hero" aria-labelledby="about-title">
        <div>
          <p className="role-label"><span aria-hidden="true" />{profile.location}</p>
          <h1 id="about-title">Hi, I’m {profile.preferredName}.</h1>
          <p className="intro-text">{profile.about}</p>
          <p>{profile.studies}</p>
          <SocialLinks />
        </div>
        <Image
          className="about-portrait"
          src="/images/saeed-about.webp"
          alt="Saeed wearing a burgundy suit outdoors"
          width={620}
          height={660}
          sizes="(max-width: 650px) 84vw, (max-width: 920px) 35vw, 340px"
          loading="eager"
        />
      </section>
      <section className="interior-section" id="background" aria-labelledby="background-title">
        <div className="section-heading section-heading-row">
          <h2 id="background-title">Experience &amp; education</h2>
          <DownloadCv />
        </div>
        <div className="timeline-grid">
          <section aria-labelledby="experience-title" className="timeline-panel">
            <h3 id="experience-title"><span className="icon-box"><Icon name="briefcase" /></span>Experience</h3>
            <Timeline entries={experience} />
          </section>
          <section aria-labelledby="education-title" className="timeline-panel">
            <h3 id="education-title"><span className="icon-box"><Icon name="education" /></span>Education</h3>
            <Timeline entries={education} />
          </section>
        </div>
      </section>
      <section className="interior-section about-personal" id="outside-work" aria-labelledby="outside-title">
        <div>
          <h2 id="outside-title">Outside work</h2>
          <p>{profile.personal}</p>
          <h3>Languages</h3>
          <dl className="language-list">
            {profile.languages.map((language) => (
              <div key={language.name}><dt>{language.name}</dt><dd>{language.level}</dd></div>
            ))}
          </dl>
        </div>
        <div className="timeline-panel">
          <h3>Volunteering</h3>
          <Timeline entries={volunteering} />
        </div>
      </section>
      <div className="interior-actions">
        <Link href="/#projects" className="button button-primary">View projects <Icon name="arrow" /></Link>
        <Link href="/#contact" className="button button-secondary">Get in touch <Icon name="external" /></Link>
      </div>
    </div>
  );
}
