import { certificates } from "@/content/documents";
import { Icon } from "./icon";

export function CourseCertificates() {
  return (
    <ul className="credential-list" role="list">
      {certificates.map((course) => (
        <li className="credential-row" key={course.title} data-reveal>
          <div className="credential-header">
            <span className="icon-box credential-icon"><Icon name="file" /></span>
            <div className="credential-info">
              <h3>{course.title}</h3>
              <p className="credential-meta">
                <span>{course.issuer}</span>
                <span>{course.date}</span>
              </p>
              <p className="credential-note">{course.note ?? "Course completion"} · {course.duration}</p>
            </div>
            {course.link && (
              <a
                className="credential-verify button button-secondary"
                href={course.link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${course.link.label}: ${course.title} (opens in a new tab)`}
              >
                {course.link.label} <Icon name="external" />
              </a>
            )}
          </div>
          <details className="credential-contents">
            <summary aria-label={`Course contents: ${course.title}`}>Course contents <Icon name="arrow" /></summary>
            <div className="credential-details">
              <p>{course.overview}</p>
              {course.instructor && (
                <p><strong>{course.instructor.label}</strong> · {course.instructor.name}</p>
              )}
              <h4>Key learning areas</h4>
              <ul className="bullet-list">
                {course.learning.map((point) => <li key={point}>{point}</li>)}
              </ul>
              {course.connection && (
                <>
                  <h4>{course.connection.title}</h4>
                  <p>{course.connection.text}</p>
                </>
              )}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
