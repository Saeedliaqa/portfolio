import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { ProjectImage, ProjectStack } from "@/components/project-card";
import { getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/content/site";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return pageMetadata(project.title, project.summary, `/projects/${project.slug}`);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <article className="shell interior case-study">
      <Link href="/#projects" className="text-link back-link"><Icon name="back" /> All projects</Link>
      <header className="interior-heading">
        <p className="label">{project.kind}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>
      <dl className="case-facts">
        <div><dt>My role</dt><dd>{project.role}</dd></div>
        <div><dt>Period</dt><dd>{project.period}</dd></div>
        <div><dt>Technologies</dt><dd><ProjectStack items={project.stack} /></dd></div>
      </dl>
      <ProjectImage project={project} detail />
      <div className="case-content">
        <div>
          <section aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            <p>{project.overview}</p>
          </section>
          <section aria-labelledby="contribution-title">
            <h2 id="contribution-title">My contribution</h2>
            <ul className="bullet-list">
              {project.work.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section aria-labelledby="challenge-title">
            <h2 id="challenge-title">Technical challenge</h2>
            <p>{project.challenge}</p>
            <h3 className="case-solution">My solution</h3>
            <p>{project.solution}</p>
          </section>
          <section aria-labelledby="outcome-title">
            <h2 id="outcome-title">Outcome</h2>
            <p>{project.outcome}</p>
          </section>
        </div>
        <aside className="evidence-panel" aria-labelledby="evidence-title">
          <h2 id="evidence-title">Project links</h2>
          <ul>
            {project.links.map((link) => (
              <li key={link.href}><a className="text-link" href={link.href}>{link.label} <Icon name="external" /></a></li>
            ))}
          </ul>
        </aside>
      </div>
      <nav className="case-navigation" aria-label="More projects">
        <Link href="/#projects" className="text-link"><Icon name="back" /> All projects</Link>
        {projects.filter(({ slug }) => slug !== project.slug).map(({ slug, title }) => (
          <Link href={`/projects/${slug}`} className="text-link" key={slug}>{title} <Icon name="arrow" /></Link>
        ))}
      </nav>
    </article>
  );
}
