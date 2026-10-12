import { Link } from "react-router";

import { OldTVFrame } from "../../tv/OldTVFrame";

const apps = [
  { name: "README.md", icon: "/icons/person.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/readme" },
  { name: "CONNECT.exe", icon: "/icons/envelope.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/connect" },
  { name: "SKILLS.sys", icon: "/icons/programming.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/skills" },
  { name: "CREDITS.txt", icon: "/icons/at.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/credits" },
  { name: "WWW", icon: "globe.gif", category: "PROJECTS", action: "", hex:"white", iconSize: "5rem", location: "/www" },
  { name: "Mobile DEV", icon: "/nokia.gif", category: "PROJECTS", action: "", hex:"white", iconSize: "5rem", location: "/mobile" },
  { name: "CLI", icon: "/computer-pixel.gif", category: "PROJECTS", action: "", hex:"white", iconSize: "5rem", location: "/cli" },
  { name: "tetris.js", icon: "/tetrominos.gif", category: "PROJECTS", action: "redirect", hex:"white", iconSize: "5rem", location: "https://tetris.mitz.codes" },
];



export function Main() {
  const categories = ["GENERAL", "PROJECTS"] as const;

  return (
    <OldTVFrame>
      <>
        <Link className="desktop-home" to="/boot" aria-label="Return to boot">
          <img src="/globe.gif" alt="" />
        </Link>
        <footer className="desktop-footer">
          Made by yours truly, with no harm caused to any AI model. Special thanks to the creators behind the
          resources that made this possible — <a href="/attributions">credits</a>.
        </footer>
        <main className="desktop fade-in" aria-label="mitzCanCode desktop">
          <section
            className="desktop-icons-window"
            aria-label="Application launcher"
          >
            <header className="window-header">
              <h1 className="window-title">APPLICATIONS</h1>
            </header>
            <div className="desktop-icons-content">
              {categories.map((category) => (
                // <section className="desktop-category" key={category}>
                //   <h2 className="desktop-category-label">[{category}]</h2>
                  <div className="desktop-category-icons">
                    {apps
                      .filter((app) => app.category === category)
                      .map((app) => (
                        <button
                          className="desktop-tile"
                          key={app.name}
                          type="button"
                          onClick={() => {
                            switch (app.action) {
                              case "redirect":
                                window.open(app.location, "_blank", "noopener,noreferrer");
                                break;
                              default:
                                break;
                            }
                          }}
                        >
                          <span className="tile-icon">
                            <img src={app.icon} alt="" style={{ width: app.iconSize, height: app.iconSize }} />
                          </span>
                          <span className="tile-name" style={{ color: app.hex }}>
                            {app.name}
                          </span>
                        </button>
                      ))}
                  </div>
                // </section>
              ))}
            </div>
          </section>
        </main>
      </>
    </OldTVFrame>
  );
}
