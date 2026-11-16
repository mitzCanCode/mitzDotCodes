import type { Route } from "./+types/contact";

import { Contact } from "~/Views/Personal/Contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mitzCanCode — Contact" },
    {
      name: "description",
      content:
        "Get in touch with Dimitris Chatzigeorgiou for projects, collaborations, and inquiries.",
    },
  ];
}

export default function ContactRoute() {
  return <Contact />;
}
