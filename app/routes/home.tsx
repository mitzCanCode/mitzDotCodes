import { redirect } from "react-router";

export function clientLoader() {
  return redirect("/boot");
}

export default function Home() {
  return null;
}
