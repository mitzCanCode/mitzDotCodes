import { redirect } from "react-router";

export function loader() {
  return redirect("/boot");
}

export default function Home() {
  return null;
}
