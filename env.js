/* import { z } from "zod";

import { API_ADDRESS, WS_SERVER } from "@env";
 */
let ENV = null;

/* const envSchema = z.object({
  WS_SERVER: z.url(),
  API_ADDRESS: z.url()
});

ENV = envSchema.parse( { API_ADDRESS, WS_SERVER });

ENV.WS_SERVER = "wss://exemptible-odilia-sorely.ngrok-free.dev/" */

ENV = {
  WS_SERVER: "https://exemptible-odilia-sorely.ngrok-free.dev/",
  API_ADDRESS: "https://megascopic-anahi-foamlike.ngrok-free.dev/"
}

export { ENV }