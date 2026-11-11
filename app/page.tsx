import Image from "next/image";
import Link from "next/link";
import { Contact, DownloadCv, SocialLinks } from "@/components/links";
import { Icon } from "@/components/icon";
import { HobbyGallery } from "@/components/hobby-gallery";
import { ProjectCard } from "@/components/project-card";
import { Timeline } from "@/components/timeline";
import { awards, certificates, cv } from "@/content/documents";
import { education, experience, profile, skills, volunteering } from "@/content/profile";
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
      <div className="home-hero-band">
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
      </div>
      <div className="shell home-highlights">
        <ul aria-label="Career highlights">
          <li><Icon name="briefcase" /><div><Link href="#experience">Client web development</Link><p>React, deployment and technical SEO at Globaq</p></div></li>
          <li><Icon name="trophy" /><div><Link href="#awards">Best Final-Year Project</Link><p>Team award for Learnify, an AI quiz app</p></div></li>
          <li><Icon name="education" /><div><Link href="#education">Transformation Studies</Link><p>Sociotechnical Transformation at BTU</p></div></li>
        </ul>
      </div>
      <section className="shell home-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading"><h2 id="experience-title">Professional experience</h2></div>
        <div className="timeline-panel"><Timeline entries={experience} /></div>
      </section>
      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading">
            <h2 id="projects-title">Selected projects</h2>
            <p className="home-section-intro">A company site I took from development to launch, and an AI quiz app I built with a teammate. Each case study covers my role, the technical choices, and where you can see the work.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>
      <section className="shell home-section" id="skills" aria-labelledby="skills-title">
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
        <div className="home-languages" id="languages">
          <h3>Languages</h3>
          <dl className="language-list">
            {profile.languages.map(({ name, level }) => (
              <div key={name}><dt>{name}</dt><dd>{level}</dd></div>
            ))}
          </dl>
        </div>
      </section>
      <section className="shell home-section education-section" id="education" aria-labelledby="qualifications-title">
        <span id="background" />
        <div className="section-heading"><h2 id="qualifications-title">Education</h2></div>
        <div className="timeline-panel"><Timeline entries={education} /></div>
        <div className="motivation-panel" id="why-transformation-studies">
          <div>
            <span className="icon-box"><Icon name="education" /></span>
            <h3 id="home-motivation-title">Why I study transformation</h3>
          </div>
          <div className="motivation-copy">
            <p>{profile.motivation.origin}</p>
            <details className="btu-disclosure">
              <summary>Why I chose BTU <Icon name="arrow" /></summary>
              <p>{profile.motivation.btu}</p>
              <p>{profile.motivation.goals}</p>
            </details>
          </div>
        </div>
      </section>
      <section className="awards-section" id="awards" aria-labelledby="awards-title">
        <div className="shell home-section">
          <div className="section-heading"><h2 id="awards-title">Awards &amp; distinctions</h2></div>
          <ul className="award-grid">
            {awards.map((award) => (
              <li className="award-card" data-award={award.id} key={award.id}>
                <div className="award-art" aria-hidden="true">
                  <span className="award-emblem"><Icon name={award.icon} /></span>
                </div>
                <div className="award-copy">
                  <p className="label">{award.kind}</p>
                  <h3>{award.title}</h3>
                  <p className="award-description">{award.description}</p>
                  <p className="award-source">{award.issuer} <span aria-hidden="true">·</span> {award.date}</p>
                  {award.link && (
                    <Link className="text-link" href={award.link.href}>{award.link.label} <Icon name="arrow" /></Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="shell home-section" id="certifications" aria-labelledby="certificates-title">
        <div className="section-heading section-heading-row">
          <h2 id="certificates-title">Course certificates</h2>
          <a className="text-link" id="cv-title" href={cv.href}>View CV PDF <Icon name="external" /></a>
        </div>
        <ul className="credential-list">
          {certificates.map((item) => (
            <li className="credential-row" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.issuer} <span aria-hidden="true">·</span> {item.date}</p>
                {item.note && <p>{item.note}</p>}
              </div>
              {item.link && (
                <a className="text-link" href={item.link.href} aria-label={`${item.link.label}: ${item.title}`}>
                  {item.link.label} <Icon name="external" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className="shell home-section outside-section" id="outside-work" aria-labelledby="personal-title">
        <div className="section-heading"><h2 id="personal-title">Volunteering &amp; interests</h2></div>
        <div className="timeline-panel" id="volunteering">
          <h3><span className="icon-box"><Icon name="briefcase" /></span>Social contributions</h3>
          <Timeline entries={volunteering} heading="h4" />
        </div>
        <div className="hobbies-block" id="hobbies">
          <h3>Outside work</h3>
          <HobbyGallery />
        </div>
      </section>
      <Contact />
    </>
  );
}
