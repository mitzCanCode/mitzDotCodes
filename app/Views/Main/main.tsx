import { useState } from "react";
import { Link } from "react-router";

import { OldTVFrame } from "../../tv/OldTVFrame";

const apps = [
  { name: "README.md", icon: "/icons/person.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/readme" },
  { name: "CONNECT.exe", icon: "/icons/envelope.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/connect" },
  { name: "SKILLS.sys", icon: "/icons/programming.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/skills" },
  { name: "WWW", icon: "globe.gif", category: "PROJECTS", action: "open", hex:"white", iconSize: "5rem", location: "/projects?category=web" },
  { name: "Mobile DEV", icon: "/nokia.gif", category: "PROJECTS", action: "open", hex:"white", iconSize: "5rem", location: "/projects?category=mobile" },
  { name: "CLI", icon: "/computer-pixel.gif", category: "PROJECTS", action: "open", hex:"white", iconSize: "5rem", location: "/projects?category=cli" },
  { name: "tetris.js", icon: "/tetrominos.gif", category: "PROJECTS", action: "open", hex:"white", iconSize: "5rem", location: "https://tetris.mitz.codes" },
];

// const apps1 = {
//   "README.md": { icon: "/icons/person.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/readme" },
//   "CONNECT.exe": { icon: "/icons/envelope.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/connect" },
//   "SKILLS.sys": { icon: "/icons/programming.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/skills" },
//   "CREDITS.txt": { icon: "/icons/at.svg", category: "GENERAL", action: "", hex:"white", iconSize: "3rem", location: "/credits" },
//   "WWW": { icon: "globe.gif", category: "PROJECTS", action: "open", hex:"white", iconSize: "5rem", location: "/projects?category=web" },
//   "Mobile DEV": { icon: "/nokia.gif", category: "PROJECTS", action: "open", hex:"white", iconSize: "5rem", location: "/projects?category=mobile" },
//   "CLI": { icon: "/computer-pixel.gif", category: "PROJECTS", action: "open", hex:"white", iconSize: "5rem", location: "/projects?category=cli" },
//   "tetris.js": { icon: "/tetrominos.gif", category: "PROJECTS", action: "open", hex:"white", iconSize: "5rem", location: "https://tetris.mitz.codes" },
// }


export function Main() {
  const categories = ["GENERAL", "PROJECTS"] as const;
  const [creditsOpen, setCreditsOpen] = useState(false);

  return (
    <OldTVFrame>
      <>
        <Link className="desktop-home" to="/boot" aria-label="Return to boot">
          <img src="/globe.gif" alt="" />
        </Link>
        <footer className="desktop-footer">
          Made by yours truly, with no harm caused to any AI model. Special thanks to the creators behind the
          resources that made this possible {" "}
          <button className="credits-link" type="button" onClick={() => setCreditsOpen(true)}>
            credits
          </button>
          .
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
                              case "open":
                                window.location.href = app.location;
                                break;
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
        <CreditsWindow open={creditsOpen} onClose={() => setCreditsOpen(false)} />
      </>
    </OldTVFrame>
  );
}

function CreditsWindow({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="window visible"
      role="dialog"
      aria-modal="true"
      aria-labelledby="credits-title"
      onClick={onClose}
    >
      <section className="window-panel" onClick={(event) => event.stopPropagation()}>
        <header className="window-header">
          <h2 className="window-title" id="credits-title">
            CREDITS.TXT
          </h2>
          <button className="window-close" type="button" onClick={onClose} aria-label="Close credits">
            ×
          </button>
        </header>
        <div className="window-content">
          <h1>CREDITS</h1>
          <h2>ICONS</h2>
          <p>Icons from Pixel Icon Library by HackerNoon.</p>
          <p>All icons used in this portfolio are from:</p>
          <ul>
            <li>Pixel Icon Library</li>
            <li>https://pixeliconlibrary.com</li>
          </ul>
          <p>Provided by:</p>
          <ul>
            <li>HackerNoon</li>
            <li>https://hackernoon.com</li>
          </ul>
          <h2>PORTFOLIO</h2>
          <p>Built with a custom retro operating system interface.</p>
          <p>Developed by Dimitris.</p>
          <p>Powered by:</p>
          <ul>
            <li>Too much coffee</li>
            <li>Late night debugging sessions</li>
            <li>Questionable amounts of curiosity</li>
          </ul>
          <h2>DEVELOPMENT SUPPORT</h2>
          <p>Special thanks to Kali, chief emotional support officer.</p>
          <p>Responsibilities:</p>
          <ul>
            <li>Supervising coding sessions</li>
            <li>Approving naps between commits</li>
            <li>Ensuring the developer remembers to take breaks</li>
          </ul>
          <h2>SYSTEM NOTES</h2>
          <p>If something breaks:</p>
          <ul>
            <li>It is probably a bug.</li>
            <li>It is probably a feature.</li>
            <li>It might require more coffee.</li>
          </ul>
          <p>Thank you for exploring this little digital world.</p>
        </div>
        <footer className="window-footer">
          <span className="window-label">CREDITS DATABASE LOADED</span>
          <span className="window-label">READY</span>
        </footer>
      </section>
    </div>
  );
}
