import type { Route } from "./+types/main";

import { Main } from "../Views/Main/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mitzCanCode" },
    { name: "description", content: "mitzCanCode desktop." },
  ];
}

export default function MainRoute() {
  return <Main />;
}
