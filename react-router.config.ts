import type { Config } from "@react-router/dev/config";

export default {
  // Cloudflare Pages serves build/client as a static single-page application.
  ssr: false,
} satisfies Config;
