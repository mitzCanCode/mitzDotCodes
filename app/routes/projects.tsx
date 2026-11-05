import { useEffect, useState } from "react";
import type { Route } from "./+types/boot";

import { GridShowcase } from "../Views/ProjectShowcase/gridShowcase/gridShowcase";
import {
  VerticalShowcase,
  type ShowcaseProject,
} from "../Views/ProjectShowcase/verticalShowcase/verticalShowcase";
import { useSearchParams } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mitzCanCode — Projects" },
    {
      name: "description",
      content: "A project showcase for mitzCanCodes projects.",
    },
  ];
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export default function ProjectsRoute() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") ?? "websites";
  const isMobile = useIsMobile();

  const websites: ShowcaseProject[] = [
      {
      name: "scriptee",
      description:
        "A website for the scriptee.app project, a project that allows you to create and share your own music.",
      hex: "white",
      underDevelopment: false,
      location: "https://scriptee.app",
      demo: { type: "gallery", imagePath: "public/showcases/www/scriptee.png" },
    },
    {
      name: "NCK Active",
      description:
        "A website for the NCK Active project, a project that allows you to order food from NCK.",
      hex: "white",
      underDevelopment: false,
      location: "https://nckactive.com",
      demo: { type: "gallery", imagePath: "public/showcases/www/nckactive.png" },
    },
    {
      name: "Sidestage",
      description:
        "A website for the Sidestage project, a project that allows you to create and share your own music.",
      hex: "white",
      underDevelopment: false,
      location: "https://sidestage.eu",
      demo: { type: "gallery", imagePath: "public/showcases/www/sidestage.png" },
    },
    {
      name: "Adelvassi",
      description:
        "A website for the Adelvassi project, a project that allows you to create and share your own music.",
      hex: "white",
      underDevelopment: false,
      location: "https://adelvassi.gr",
      demo: { type: "gallery", imagePath: "public/showcases/www/adelvassi.png" },
    },
    {
      name: "Tetris.js",
      description:
        "A website for the Tetris.js project, a project that allows you to play Tetris in your browser.",
      hex: "white",
      underDevelopment: false,
      location: "https://tetris.mitz.codes",
      demo: { type: "gallery", imagePath: "public/showcases/www/tetris-js.png" },
    },

    {
      name: "Researcher Portfolio",
      description:
        "A website for the Research project, a project that allows you to explore academic research.",
      hex: "white",
      underDevelopment: false,
      location: "https://ifigeneiakarani.gr/",
      demo: { type: "gallery", imagePath: "public/showcases/www/researcher-portfolio.png" },
    },
  ];

  const apps: ShowcaseProject[] = [
    {
      name: "Sololift",
      description:
        "A website for the Sololift project, a project that allows you to create and share your own music.",
      hex: "white",
      underDevelopment: false,
      location: "https://sololift.app"
    },
    {
      name: "DevPoint",
      description:
        "A website for the DevPoint project, a project that allows you to create and share your own music.",
      hex: "white",
      underDevelopment: false,
      location: "https://devpoint.mitz.codes",
    },
    {
      name: "HotPotatoes",
      description:
        "A website for the HotPotatoes project, a project that allows you to create and share your own music.",
      hex: "white",
      underDevelopment: true,
      location: null,
    },
  ];

  const cli: ShowcaseProject[] = [
    {
      name: "Netscan",
      description: "A CLI tool for scanning networks.",
      hex: "red",
      underDevelopment: false,
      location: "https://mitzcancode.github.io/netscan",
      language: "python",
      demo: { type: "video", videoPath: "/showcases/cli/netscan.mov" },
    },
    {
      name: "OhShint",
      description: "A CLI tool for osint investigations.",
      hex: "cyan",
      underDevelopment: false,
      location: "https://mitzcancode.github.io/OhShint/",
      language: "python",
      demo: { type: "video", videoPath: "/showcases/cli/ohshint.mp4" },
    },
    {
      name: "tetris.c",
      description: "A CLI tool for playing Tetris.",
      hex: "purple",
      underDevelopment: false,
      location: "https://github.com/mitzCanCode/Tetris",
      language: "c",
      demo: { type: "video", videoPath: "/showcases/cli/tetris-c.mp4" },
    },
  ];

  const websitesView = isMobile ? (
    <VerticalShowcase projects={websites} title="WEBSITES" />
  ) : (
    <GridShowcase projects={websites} title="WEBSITES" />
  );

  switch (category) {
    case "websites":
    case "web":
      return websitesView;
    case "mobile":
      return <VerticalShowcase projects={apps} title="MOBILE" />;
    case "cli":
      return <VerticalShowcase projects={cli} title="CLI" />;
    default:
      return websitesView;
  }
}
