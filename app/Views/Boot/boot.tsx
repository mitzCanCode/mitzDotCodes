import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { OldTVFrame } from "../../tv/OldTVFrame";

import "./boot.css";

const dotStates = [".", "..", "..."];

export function Boot() {
  const navigate = useNavigate();
  const [dotIndex, setDotIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const dots = window.setInterval(() => {
      setDotIndex((current) => (current + 1) % dotStates.length);
    }, 360);
    const reveal = window.setTimeout(() => {
      window.clearInterval(dots);
      setReady(true);
    }, 3_240);

    return () => {
      window.clearInterval(dots);
      window.clearTimeout(reveal);
    };
  }, []);

  useEffect(() => {
    const enter = (event: KeyboardEvent) => {
      if (event.key === "Enter" && ready) {
        navigate("/main");
      }
    };

    document.addEventListener("keydown", enter);
    return () => document.removeEventListener("keydown", enter);
  }, [navigate, ready]);
  return (
    <OldTVFrame>
      <main className="terminal" aria-label="System boot sequence">
        {!ready ? (
          <p className="boot">
            INITIALIZING<span className="boot-dots">{dotStates[dotIndex]}</span>
          </p>
        ) : (
          <>
            <div className="logo-container fade-in">
              <pre className="boot-ascii">{`███╗   ███╗██╗████████╗███████╗
████╗ ████║██║╚══██╔══╝╚══███╔╝
██╔████╔██║██║   ██║     ███╔╝
██║╚██╔╝██║██║   ██║    ███╔╝
██║ ╚═╝ ██║██║   ██║   ███████╗
╚═╝     ╚═╝╚═╝   ╚═╝   ╚══════╝`}</pre>
              <div className="ticker" aria-hidden="true">
                <div className="ticker-track">
                  {[0, 1].map((group) => (
                    <div className="ticker-group" key={group}>
                      <span>SOFTWARE ENGINEER</span>
                      <span>*</span>
                      <span>FULL STACK DEVELOPMENT</span>
                      <span>*</span>
                      <span>IOS APPLICATIONS</span>
                      <span>*</span>
                      <span>WEB APPLICATIONS</span>
                      <span>*</span>
                      <span>SERVERS</span>
                      <span>*</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="enter-system fade-in"
              type="button"
              onClick={() => navigate("/main")}
            >
              [ ENTER SYSTEM ]
            </button>
          </>
        )}
      </main>
    </OldTVFrame>
  );
}
