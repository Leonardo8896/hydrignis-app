/* import { z } from "zod";
/* import { z } from "zod";

import { API_ADDRESS, WS_SERVER } from "@env";
 */
 */
let ENV = null;

/* const envSchema = z.object({
/* const envSchema = z.object({
  WS_SERVER: z.url(),
  API_ADDRESS: z.url()
});

ENV = envSchema.parse( { API_ADDRESS, WS_SERVER });

ENV.WS_SERVER = "wss://exemptible-odilia-sorely.ngrok-free.dev/" */

ENV = {
  WS_SERVER: "ws://hydrignis.ddns.net/ws",
  API_ADDRESS: "https://exemptible-odilia-sorely.ngrok-free.dev"
}

export { ENV }