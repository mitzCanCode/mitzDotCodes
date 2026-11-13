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
            <div className="readme-intro">
            <img className="readme-portrait" src="/me.png" alt="The thought of mitz" />

            <div className="readme-intro-copy">
                <h1 className="readme-title">About me!</h1>
                <p>
                    Hello! It seems you have stumbled upon my little corner on the internet, make yourself comfortable and take a look around! This is a personal portfolio website that I have built to showcase my work and skills as a software developer.
                </p>

            </div>
                        </div>

                <p>
                    My name is Dimitris Chatzigeorgiou, I am a Computer Science undergraduate at the University of Piraeus, and in my part-time I enjoy creating other little spaces on the internet such as this one! My software development journey started back in February 22, 2023, when I first started writing code in high school.
                </p>
                <p>
                    Coding is more than just a technical skill for me, it is a creative outlet where I can explore ideas, solve complex problems and build useful software from the ground up. 
                </p>
                <p>
                    I develop several kinds of software, all the way from the frontend to the backend of a system. From websites, e-commerce stores, mobile applications, APIs, automation tools, you name it chances are I can build it. 
                </p>

                <p>
                    My skill set is constantly evolving wether that is the programming languages I know, software engineering practices, cybersecurity practices, I’m always evolving with the tech world whilst trying to learn everything I can about building secure and scalable applications.
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
