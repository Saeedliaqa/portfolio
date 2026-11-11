import Image from "next/image";
import Link from "next/link";
import { Contact, DownloadCv, SocialLinks } from "@/components/links";
import { Icon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { education, experience, profile, skills } from "@/content/profile";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/content/site";

export const metadata = pageMetadata(
  "Software Developer",
  "Muhammad Saeed Liaqat is a software developer and master’s student in Cottbus, Germany. Explore his React and Node.js projects, experience and CV.",
  "/",
);

export default function Home() {
  const [firstName, ...restOfName] = profile.name.split(" ");

  return (
    <>
      <section className="shell hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="role-label"><span aria-hidden="true" />{profile.role}</p>
          <h1 id="hero-title">{firstName}{" "}<br /><span>{restOfName.join(" ")}</span></h1>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="actions hero-actions">
            <Link className="button button-primary" href="/#projects">View projects <Icon name="arrow" /></Link>
            <DownloadCv />
          </div>
          <SocialLinks />
        </div>
        <figure className="hero-portrait">
          <div className="portrait-surface">
            <div className="portrait-ring" aria-hidden="true" />
            <Image
              src="/images/saeed-portrait.webp"
              alt="Portrait of Muhammad Saeed Liaqat"
              width={844}
              height={834}
              sizes="(max-width: 650px) 88vw, (max-width: 900px) 39vw, 376px"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <figcaption><Icon name="pin" /> {profile.location}</figcaption>
        </figure>
      </section>
      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading">
            <h2 id="projects-title">Selected projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>
      <section className="shell section-block" aria-labelledby="skills-title">
        <div className="section-heading">
          <h2 id="skills-title">Technical skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <span className="icon-box"><Icon name={skill.icon} /></span>
              <h3>{skill.title}</h3>
              <p>{skill.tools}</p>
              <Link className="text-link" href={skill.evidence.href}>{skill.evidence.label} <Icon name={skill.evidence.href.startsWith("/") ? "arrow" : "external"} /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="shell section-block background-section" aria-labelledby="background-title">
        <div className="section-heading section-heading-row">
          <h2 id="background-title">Experience &amp; education</h2>
          <Link href="/about#background" className="text-link">View full timeline <Icon name="arrow" /></Link>
        </div>
        <div className="background-list">
          {[{ entry: experience[0], icon: "briefcase" as const }, ...education.map((entry) => ({ entry, icon: "education" as const }))].map(({ entry, icon }) => (
            <div className="background-row" key={entry.title}>
              <span className="icon-box"><Icon name={icon} /></span>
              <div><h3>{entry.title}</h3><p>{entry.organization}</p></div>
              <p className="timeline-date">{entry.period}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="shell section-block personal-section" aria-labelledby="personal-title">
        <div className="personal-panel">
          <div>
            <h2 id="personal-title">Outside work</h2>
            <p>{profile.personal} I’ve also volunteered with The Paradigm Association on its website and on fundraising.</p>
          </div>
          <Link href="/about#outside-work" className="text-link">Read more about me <Icon name="arrow" /></Link>
        </div>
      </section>
      <Contact />
    </>
  );
}
