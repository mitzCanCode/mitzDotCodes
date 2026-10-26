import { type CSSProperties } from "react";
import { Link } from "react-router";

import { OldTVFrame } from "../../../tv/OldTVFrame";
import "./verticalShowcase.css";

export type ProjectDemo =
  | { type: "video"; videoPath: string }
  | { type: "gallery"; folder: string };

export type ShowcaseProject = {
  name: string;
  description: string | null;
  hex: string;
  underDevelopment: boolean;
  location: string | null;
  language?: string;
  demo?: ProjectDemo;
};

export function VerticalShowcase({
  projects,
  title,
}: {
  projects: ShowcaseProject[];
  title: string;
  demoScale?: number;
}) {
  return (
    <OldTVFrame>
      <>
        <Link className="desktop-home" to="/main" aria-label="Return to home">
          <img src="/globe.gif" alt="" />
        </Link>
        <main className="projects fade-in" aria-label="mitzCanCode desktop">
          <header className="project-header">
            <h1 className="project-title">{title}</h1>
          </header>
          <div className="projects-icons-content">
            <div className="projects-vertical-list p-4">
              {projects.map((project) => (
                <button
                  className="project-list-item"
                  key={project.name}
                  type="button"
                  data-project={project.name}
                  onClick={() => {
                    if (project.underDevelopment || !project.location) {
                      return;
                    }

                    window.open(
                      project.location,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                  style={{ "--project-color": project.hex } as CSSProperties}
                >
                  <span className="tile-name">{project.name}</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </>
    </OldTVFrame>
  );
}
