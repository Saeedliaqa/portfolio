import type { TimelineEntry } from "@/content/profile";

export function Timeline({
  entries,
  heading: Heading = "h3",
}: {
  entries: readonly TimelineEntry[];
  heading?: "h3" | "h4";
}) {
  return (
    <ol className="timeline">
      {entries.map((entry) => (
        <li key={entry.title}>
          <p className="timeline-date">{entry.period}</p>
          <Heading>{entry.title}</Heading>
          <p className="timeline-organization">{entry.organization}</p>
          <p>{entry.detail}</p>
          {entry.distinction && <p className="timeline-distinction">{entry.distinction}</p>}
          {entry.highlights && (
            <ul className="timeline-highlights">
              {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
