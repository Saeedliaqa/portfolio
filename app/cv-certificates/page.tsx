import Link from "next/link";
import { DownloadCv } from "@/components/links";
import { Icon } from "@/components/icon";
import { awards, certificates, cv } from "@/content/documents";
import { education } from "@/content/profile";
import { pageMetadata } from "@/content/site";

export const metadata = pageMetadata(
  "CV & Certificates",
  "Download Saeed’s software developer CV and view selected qualifications, course certificates and awards.",
  "/cv-certificates",
);

function Credentials({ items }: { items: typeof certificates }) {
  return (
    <ul className="credential-list">
      {items.map((item) => (
        <li className="credential-row" key={item.title}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.issuer} <span aria-hidden="true">·</span> {item.date}</p>
            {item.note && <p>{item.note}</p>}
          </div>
          {item.link && (
            <Link className="text-link" href={item.link.href} aria-label={`${item.link.label}: ${item.title}`}>
              {item.link.label} <Icon name={item.link.href.startsWith("/") ? "arrow" : "external"} />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function CvAndCertificates() {
  return (
    <div className="shell interior">
      <header className="interior-heading">
        <h1>CV &amp; certificates</h1>
        <p>My software development CV, education, selected course certificates and awards.</p>
      </header>
      <section className="cv-panel" aria-labelledby="cv-title">
        <span className="icon-box"><Icon name="file" /></span>
        <div>
          <h2 id="cv-title">Software developer CV</h2>
          <p>Muhammad Saeed Liaqat · PDF</p>
        </div>
        <div className="actions">
          <a className="button button-secondary" href={cv.href}>View PDF <Icon name="external" /></a>
          <DownloadCv primary />
        </div>
      </section>
      <section className="interior-section" aria-labelledby="qualifications-title">
        <div className="section-heading"><h2 id="qualifications-title">Education</h2></div>
        <ul className="credential-list">
          {education.map((entry) => (
            <li className="credential-row" key={entry.title}>
              <div><h3>{entry.title}</h3><p>{entry.organization}</p></div>
              <p className="timeline-date">{entry.period}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="interior-section" aria-labelledby="certificates-title">
        <div className="section-heading"><h2 id="certificates-title">Course certificates</h2></div>
        <Credentials items={certificates} />
      </section>
      <section className="interior-section" aria-labelledby="awards-title">
        <div className="section-heading"><h2 id="awards-title">Awards</h2></div>
        <Credentials items={awards} />
      </section>
    </div>
  );
}
