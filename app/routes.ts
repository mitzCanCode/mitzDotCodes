import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("boot", "routes/boot.tsx"),
  route("main", "routes/main.tsx"),
  route("projects", "routes/projects.tsx"),
] satisfies RouteConfig;
