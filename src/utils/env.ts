import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const env = createEnv({
  server: {
    API_URL: z.string(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_API_URL: z.string(),
  },
  runtimeEnv: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
