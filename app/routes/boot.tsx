import type { Route } from "./+types/boot";

import { Boot } from "../Views/Boot/boot";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mitzCanCode — Boot" },
    { name: "description", content: "Boot the mitzCanCode desktop." },
  ];
}

export default function BootRoute() {
  return <Boot />;
}
