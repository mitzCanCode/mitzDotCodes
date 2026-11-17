import { Link } from "react-router";

import { OldTVFrame } from "../../tv/OldTVFrame";

const startDate = Date.UTC(2023, 1, 22);

const certificates = [
  {
    name: "Certified Associate JavaScript Programmer",
    issuer: "JavaScript Institute",
    downloadUrl: "/certificates/jsa.pdf",
    verificationUrl: "https://verify.openedg.org/?id=MATa.tXYZ.nn8q",
  },
  {
    name: "Certified Professional Python Programmer",
    issuer: "Python Institute",
    downloadUrl: "/certificates/pcpp.pdf",
    verificationUrl: "https://verify.openedg.org/?id=S5WM.5Hyx.M1rJ",
  },
  {
    name: "Certified Associate Python Programmer",
    issuer: "Python Institute",
    downloadUrl: "/certificates/pcap.pdf",
    verificationUrl: "https://verify.openedg.org/?id=o57n.fysu.VKmu",
  },

];

const skillGroups = [
  { name: "Backend", skills: ["Python", "Java", "C", "Swift", "C++"] },
  { name: "Frontend", skills: ["JavaScript", "Tailwind CSS", "SwiftUI", "React"] },
  {
    name: "Tools",
    skills: ["Docker", "Git", "Bash", "RevenueCat", "Firebase", "Cloudflare"],
  },
];

function getDaysSinceStart() {
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((today - startDate) / 86_400_000);
}

export function Skills() {
  return (
    <OldTVFrame>
      <>
        <Link className="desktop-home" to="/main" aria-label="Return to desktop">
          <img src="/gifs/globe.gif" style={{ width: "5rem", height: "5rem" }} alt="" />
        </Link>
        <main className="desktop fade-in connect-content skills-content" aria-labelledby="skills-title">
          <header className="connect-heading">
            <p className="connect-status">
              <span className="status-light" aria-hidden="true" />
              SKILLS DATABASE ONLINE
            </p>
            <h1 className="connect-title" id="skills-title">
              Skills &amp; certifications
            </h1>
            <p className="connect-intro">
              A snapshot of what I build with and what I&apos;ve learned along the way.
            </p>
          </header>

          <section className="skills-stats" aria-label="Developer stats">
            <div className="skills-stat">
              <span className="skills-stat-value">{getDaysSinceStart()}</span>
              <span className="skills-stat-label">Days building since Feb 22, 2023</span>
            </div>
            <div className="skills-stat">
              <span className="skills-stat-value">{certificates.length}</span>
              <span className="skills-stat-label">Certifications</span>
            </div>
          </section>

          <section className="skills-section" aria-labelledby="certifications-title">
            <h2 className="skills-section-title" id="certifications-title">
              Certifications
            </h2>
            <ul className="skills-certificates">
              {certificates.map((certificate) => (
                <li className="skills-certificate" key={certificate.name}>
                  <div className="skills-certificate-info">
                    <h3>{certificate.name}</h3>
                    <p>{certificate.issuer}</p>
                  </div>
                  <div className="skills-actions">
                    <a className="connect-action" href={certificate.downloadUrl} download>
                      Download
                    </a>
                    {certificate.verificationUrl ? (
                      <a
                        className="connect-action"
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Verify
                      </a>
                    ) : (
                      <span className="skills-verify-pending">
                        Verification link coming soon
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="skills-actions">

              <a
                className="connect-action skills-credly-action"
                href="https://www.credly.com/users/mitz"
                target="_blank"
                rel="noreferrer"
              >
                View my Credly profile
              </a>
              <a
                className="connect-action skills-credly-action"
                href="/cv.pdf"
                download
              >
                Download my CV
              </a>
            </div>

          </section>

          <section className="skills-section" aria-labelledby="technologies-title">
            <h2 className="skills-section-title" id="technologies-title">
              Technologies
            </h2>
            <div className="skills-groups">
              {skillGroups.map((group) => (
                <section className="skills-group" key={group.name} aria-label={group.name}>
                  <h3>{group.name}</h3>
                  <ul className="skills-tags">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </main>
      </>
    </OldTVFrame>
  );
}
