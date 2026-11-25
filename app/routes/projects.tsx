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
      description: "A content idea generation platform for businesses and entrepreneurs who struggle with advertising on social media.",
      hex: "purple",
      underDevelopment: false,
      location: "https://scriptee.app",
      demo: { type: "gallery", imagePath: "/showcases/www/scriptee.png" },
    },
    {
      name: "NCK Active",
      description: "A website for a digital agency specializing in e-commerce stores, custom websites and software development.",
      hex: "cyan",
      underDevelopment: false,
      location: "https://nckactive.com",
      demo: { type: "gallery", imagePath: "/showcases/www/nckactive.png" },
    },
    {
      name: "Sidestage",
      description: "A website for a luxury villa rental showcasing properties in Costa Navarino, Greece, with a focus on elegant design and high-quality imagery.",
      hex: "gold",
      underDevelopment: false,
      location: "https://sidestage.eu",
      demo: { type: "gallery", imagePath: "/showcases/www/sidestage.png" },
    },
    {
      name: "Adelvassi",
      description: "A corporate website for a Greek manufacturer of brooms and brushes, showcasing its products, history, and expertise.",
      hex: "orange",
      underDevelopment: false,
      location: "https://adelvassi.gr",
      demo: { type: "gallery", imagePath: "/showcases/www/adelvassi.png" },
    },
    {
      name: "Tetris.js",
      description: "A browser-based Tetris game built with JavaScript. Made as a port of a C implementation of Tetris I made.",
      hex: "lime",
      underDevelopment: false,
      location: "https://tetris.mitz.codes",
      demo: { type: "gallery", imagePath: "/showcases/www/tetris-js.png" },
    },

    {
      name: "Researcher Portfolio",
      description: "A personal academic portfolio website (with WCAG 2.0 compliance) for a psychology researcher.",
      hex: "white",
      underDevelopment: false,
      location: "https://ifigeneiakarani.gr/",
      demo: { type: "gallery", imagePath: "/showcases/www/researcher-portfolio.png" },
    },
  ];

  const apps: ShowcaseProject[] = [
    {
      name: "SoloLift",
      description:
        "A workout tracker app for powerlifting and bodybuilding, with a focus on simplicity and ease of use.",
      hex: "#DC143C",
      underDevelopment: false,
      location: "https://sololift.app",
      demo: { type: "gallery", imagePath: "/showcases/mobile/sololift.png" },
    },
    {
      name: "DevPoint",
      description:
        "An app for developers, to view the status of their deployments, as well as a suite of tools to simplify the development process.",
      hex: "#BF5AF2",
      underDevelopment: false,
      location: "https://devpoint.mitz.codes",
      demo: { type: "gallery", imagePath: "/showcases/mobile/devpoint.png" },
    },
    // {
    //   name: "HotPotatoes",
    //   description:
    //     "A website for the HotPotatoes project, a project that allows you to create and share your own music.",
    //   hex: "cyan",
    //   underDevelopment: true,
    //   location: null,
    // },
  ];

  const cli: ShowcaseProject[] = [
    {
      name: "Netscan.py",
      description: "A CLI tool for scanning networks.",
      hex: "red",
      underDevelopment: false,
      location: "https://mitzcancode.github.io/netscan",
      demo: { type: "gallery", imagePath: "/showcases/cli/netscan.png" },
    },
    {
      name: "OhShint.py",
      description: "A CLI tool for OSINT investigations.",
      hex: "cyan",
      underDevelopment: false,
      location: "https://mitzcancode.github.io/OhShint/",
      demo: { type: "gallery", imagePath: "/showcases/cli/ohshint.png" },
    },
    {
      name: "tetris.c",
      description: "A CLI version of Tetris.",
      hex: "purple",
      underDevelopment: false,
      location: "https://github.com/mitzCanCode/Tetris",
      language: "c",
      demo: { type: "gallery", imagePath: "/showcases/cli/tetris.png" },
    },
  
    {
      name: "pacman.cpp",
      description: "A CLI version of Pacman.",
      hex: "yellow",
      underDevelopment: false,
      location: "https://github.com/mitzCanCode/Pacman",
      language: "c++",
      demo: { type: "gallery", imagePath: "/showcases/cli/pacman.png" },
    },
  ];

  const renderShowcase = (projects: ShowcaseProject[], title: string) => {
    return isMobile ? (
      <VerticalShowcase projects={projects} title={title} />
    ) : (
      <GridShowcase projects={projects} title={title} />
    );
  };

  switch (category) {
    case "websites":
    case "web":
      return renderShowcase(websites, "WEBSITES");

    case "mobile":
      return renderShowcase(apps, "MOBILE");

    case "cli":
      return renderShowcase(cli, "CLI");

    default:
      return renderShowcase(websites, "WEBSITES");
  }
}
