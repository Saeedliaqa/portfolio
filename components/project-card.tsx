import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Icon } from "./icon";

export function ProjectImage({ project, detail = false }: { project: Project; detail?: boolean }) {
  const { media } = project;
  return (
    <figure className={detail ? "project-figure" : "project-thumbnail"} data-project={project.slug}>
      <div className="project-image-frame">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={detail ? "(max-width: 760px) 92vw, (max-width: 1200px) 90vw, 1060px" : "(max-width: 650px) 90vw, (max-width: 1200px) 46vw, 520px"}
        />
      </div>
      {detail && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}

export function ProjectStack({ items }: { items: readonly string[] }) {
  return <ul className="stack-list" aria-label="Technologies and approaches">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectImage project={project} />
      <div className="project-card-body">
        <p className="label">{project.kind}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p>{project.contribution}</p>
        <ProjectStack items={project.stack} />
        <Link href={`/projects/${project.slug}`} className="text-link card-link" aria-label={`Read case study: ${project.title}`}>
          Read case study <Icon name="arrow" />
        </Link>
      </div>
    </article>
  );
}
