import { useState } from "react";
import { Link } from "react-router";

import { OldTVFrame } from "../../tv/OldTVFrame";

export function ReadMe() {

  return (
    <OldTVFrame>
      <>
        <Link className="desktop-home" to="/boot" aria-label="Return to boot">
          <img src="/globe.gif" style={{ width: "5rem", height: "5rem" }} alt="" />
        </Link>
        <main className="desktop fade-in readme-content" aria-label="mitzCanCode about text">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </main>
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
