import { EventEmitter } from "expo";

import eventBus from "../events";
// ...dentro do onmessage...

let wsClient = null;

function parseJsonString(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Erro ao converter string para objeto:", error);
    return null;
  }
}

function initWebSocket(url, auth_token) {
  console.log("[WebSocket] initWebSocket called");
  console.log("[WebSocket] URL:", url);
  console.log("[WebSocket] auth_token:", auth_token);
  const urlTemplate = `${url}?token=${auth_token}`;
  console.log("[WebSocket] Full URL:", urlTemplate);
  if (!wsClient) {
    wsClient = new WebSocket(urlTemplate);

    wsClient.onopen = () => {
      console.log("✅ WebSocket conectado!");
    };

    wsClient.onmessage = (event) => {
      //console.log("📩 Mensagem recebida:", event.data);
      const body = parseJsonString(event.data);
      //console.log(`WS:[BODY] ${event.data}`);
      if (body.Camera == undefined) {
        console.log("Recebido evento HYDRALIZE");
        eventBus.emit("hydralize", event.data);
      } else {
        console.log("Recebido evento IGNIS");
        eventBus.emit("ignis", event.data);
      }
    };

    wsClient.onerror = (err) => {
      console.error("❌ Erro WebSocket:", err.message);
      console.log(err);
    };

    wsClient.onclose = () => {
      console.log("🔌 WebSocket fechado");
      wsClient = null; // libera para reconectar se precisar
    };
  }
  return wsClient;
}

function getWsClient() {
  return wsClient;
}

export { wsClient, initWebSocket, getWsClient };
