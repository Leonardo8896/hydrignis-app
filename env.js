import { z } from "zod";

import { API_ADDRESS, WS_SERVER } from "@env";

let ENV = null;

const envSchema = z.object({
  WS_SERVER: z.url(),
  API_ADDRESS: z.url()
});

ENV = envSchema.parse( { API_ADDRESS, WS_SERVER });

export { ENV }