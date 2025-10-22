// ws.js (ou o nome do seu módulo)
import eventBus from "../events";

let wsClient = null;
let isReconnecting = false

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

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

  // Evita criar múltiplas instâncias
  if (wsClient && (wsClient.readyState === WebSocket.OPEN || wsClient.readyState === WebSocket.CONNECTING)) {
    console.log("[WebSocket] já existe uma conexão ativa/conectando; reutilizando");
    return wsClient;
  }

  wsClient = new WebSocket(urlTemplate);

  wsClient.onopen = () => {
    console.log("✅ WebSocket conectado!");
  };

  wsClient.onmessage = (event) => {
    const body = parseJsonString(event.data);
    if (!body) return;

    if (body.event === "hydralize_playload") {
      console.log("Recebido evento HYDRALIZE");
      eventBus.emit("hydralize", body.data);
    } else if (body.event === "igniszero_playload") {
      console.log("Recebido evento IGNIS");
      eventBus.emit("ignis", body.data);
    } else if (body.event === "connected_devices") {
      console.log(body.data);
      eventBus.emit("connected_devices", body.data);
    }
  };

  wsClient.onerror = (err) => {
    // Em RN, err.message pode não existir; logue o objeto inteiro também
    // console.error("❌ Erro WebSocket:", err?.message || err);
    console.log(err);
    wsClient = null;
    attemptReconnect(url, auth_token); // tenta reconectar
  };

  wsClient.onclose = () => {
    console.log("🔌 WebSocket fechado");
    wsClient = null; // libera para reconectar se precisar
    attemptReconnect(url, auth_token);
  };

  return wsClient;
}

async function attemptReconnect(url, auth_token) {
  if (isReconnecting) {
    console.log("[WebSocket] Reconexão já em andamento; ignorando nova tentativa.");
    return;
  }

  isReconnecting = true;
  console.log("[WebSocket] Tentando reconectar em 2 segundos...");
  await wait(2000); // Aguarda 2 segundos antes de tentar reconectar
  initWebSocket(url, auth_token);
}

function getWsClient() {
  return wsClient;
}

export { initWebSocket, getWsClient };
