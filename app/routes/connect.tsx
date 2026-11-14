import type { Route } from "./+types/connect";

import { Connect } from "../Views/Personal/connect";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mitzCanCode — Connect" },
    {
      name: "description",
      content: "Connect with Dimitris through his developer and cybersecurity profiles.",
    },
  ];
}

export default function ConnectRoute() {
  return <Connect />;
}
