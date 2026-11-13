import type { Route } from "./+types/main";

import { ReadMe } from "../Views/Personal/readme";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mitzCanCode" },
    { name: "description", content: "Details about mitzCanCode" },
  ];
}

export default function ReadMeRoute() {
  return <ReadMe />;
}