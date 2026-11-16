import type { Route } from "./+types/skills";

import { Skills } from "../Views/Personal/skills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mitzCanCode — Skills & Certifications" },
    {
      name: "description",
      content: "Explore Dimitris's developer skills and certifications.",
    },
  ];
}

export default function SkillsRoute() {
  return <Skills />;
}
