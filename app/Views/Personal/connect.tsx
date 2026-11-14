import { useState } from "react";
import { Link } from "react-router";

import { OldTVFrame } from "../../tv/OldTVFrame";

const discordUsername = "mitzcancode";

const connections = [
  {
    name: "GitHub",
    value: "github.com/mitzCanCode",
    href: "https://github.com/mitzCanCode",
    icon: "/icons/github.svg",
    action: "View profile",
  },
  {
    name: "TryHackMe",
    value: "tryhackme.com/p/mitzCanCode",
    href: "https://tryhackme.com/p/mitzCanCode",
    icon: "/icons/cloud.svg",
    action: "View profile",
  },
  {
    name: "HackerRank",
    value: "hackerrank.com/profile/dxmxtrxs",
    href: "https://www.hackerrank.com/profile/dxmxtrxs",
    icon: "/icons/programming.svg",
    action: "View profile",
  },
  {
    name: "Apple Music",
    value: "music.apple.com/profile/mitzOnAux",
    href: "https://music.apple.com/profile/mitzOnAux",
    icon: "/icons/music.svg",
    action: "View profile",
  },
  {
    name: "Professional email",
    value: "dimitris.chatzi@proton.me",
    href: "mailto:dimitris.chatzi@proton.me",
    icon: "/icons/envelope.svg",
    action: "Send email",
  },
];

export function Connect() {
  const [discordStatus, setDiscordStatus] = useState("");

  async function copyDiscordUsername() {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard access is unavailable.");
      }

      await navigator.clipboard.writeText(discordUsername);
      setDiscordStatus("Discord username copied.");
    } catch {
      setDiscordStatus("Could not copy. Search for @mitzcancode on Discord.");
    }
  }

  return (
    <OldTVFrame>
      <>
        <Link className="desktop-home" to="/boot" aria-label="Return to boot">
          <img src="/globe.gif" style={{ width: "5rem", height: "5rem" }} alt="" />
        </Link>
        <main className="desktop fade-in connect-content" aria-labelledby="connect-title">
          <header className="connect-heading">
            <p className="connect-status">
              <span className="status-light" aria-hidden="true" />
              CONNECTIONS ONLINE
            </p>
            <h1 className="connect-title" id="connect-title">
              Let&apos;s connect
            </h1>
            <p className="connect-intro">
              Find me around the web or reach out by email.
            </p>
          </header>

          <ul className="connect-list">
            {connections.map((connection) => (
              <li className="connect-item" key={connection.name}>
                <span className="connect-icon" aria-hidden="true">
                  <img src={connection.icon} alt="" />
                </span>
                <span className="connect-details">
                  <span className="connect-name">{connection.name}</span>
                  <span className="connect-value">{connection.value}</span>
                </span>
                <a
                  className="connect-action"
                  href={connection.href}
                  target={connection.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={connection.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  {connection.action}
                </a>
              </li>
            ))}
            <li className="connect-item">
              <span className="connect-icon" aria-hidden="true">
                <img src="/icons/discord.svg" alt="" />
              </span>
              <span className="connect-details">
                <span className="connect-name">Discord</span>
                <span className="connect-value">@{discordUsername}</span>
              </span>
              <button
                className="connect-action"
                type="button"
                onClick={copyDiscordUsername}
                aria-label={`Copy Discord username ${discordUsername}`}
              >
                Copy username
              </button>
            </li>
          </ul>
          <p className="connect-feedback" role="status" aria-live="polite">
            {discordStatus}
          </p>
        </main>
      </>
    </OldTVFrame>
  );
}