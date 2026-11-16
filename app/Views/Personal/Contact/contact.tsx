import { Link } from "react-router";

import { OldTVFrame } from "../../../tv/OldTVFrame";
import ContactForm from "./contactForm";

export function Contact() {
  return (
    <OldTVFrame>
      <>
        <Link
          className="desktop-home"
          to="/main"
          aria-label="Return to desktop"
        >
          <img
            src="/globe.gif"
            style={{ width: "5rem", height: "5rem" }}
            alt=""
          />
        </Link>
        <main
          className="desktop fade-in contact-content"
          aria-labelledby="contact-title"
        >
          <ContactForm />
        </main>
      </>
    </OldTVFrame>
  );
}
