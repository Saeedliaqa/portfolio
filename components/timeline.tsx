import type { TimelineEntry } from "@/content/profile";

export function Timeline({ entries }: { entries: readonly TimelineEntry[] }) {
  return (
    <ol className="timeline">
      {entries.map((entry) => (
        <li key={entry.title}>
          <p className="timeline-date">{entry.period}</p>
          <h4>{entry.title}</h4>
          <p className="timeline-organization">{entry.organization}</p>
          <p>{entry.detail}</p>
        </li>
      ))}
    </ol>
  );
}
