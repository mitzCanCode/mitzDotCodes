import { type CSSProperties } from "react";
import { Link } from "react-router";

import { OldTVFrame } from "../../../tv/OldTVFrame";
import { type ShowcaseProject } from "../verticalShowcase/verticalShowcase";
import "./gridShowcase.css";

function screenshotFor(project: ShowcaseProject): string | null {
  if (project.demo?.type === "gallery") {
    return `${project.demo.folder}/cover.png`;
  }
  return null;
}

export function GridShowcase({
  projects,
  title,
}: {
  projects: ShowcaseProject[];
  title: string;
}) {
  return (
    <OldTVFrame>
      <>
        <Link className="desktop-home" to="/main" aria-label="Return to home">
          <img src="/globe.gif" alt="" />
        </Link>
        <main className="projects-grid fade-in" aria-label="Website projects">
          <header className="project-header">
            <h1 className="project-title">{title}</h1>
          </header>
          <div className="projects-grid-list">
            {projects.map((project) => {
              const shot = screenshotFor(project);
              const openable =
                !project.underDevelopment && Boolean(project.location);

              return (
                <button
                  className="project-card"
                  key={project.name}
                  type="button"
                  disabled={!openable}
                  data-project={project.name}
                  style={{ "--project-color": project.hex } as CSSProperties}
                  onClick={() => {
                    if (!openable || !project.location) return;
                    window.open(
                      project.location,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                >
                  <div className="project-card-shot">
                    {shot ? (
                      <img
                        src={shot}
                        alt=""
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                  </div>
                  <span className="project-card-name">{project.name}</span>
                  {project.description ? (
                    <p className="project-card-desc">{project.description}</p>
                  ) : null}
                </button>
              );
            })}
          </div>
        </main>
      </>
    </OldTVFrame>
  );
}
