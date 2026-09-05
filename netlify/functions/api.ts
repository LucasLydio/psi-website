import { jsonResponse, notFoundResponse } from "../../backend/src/shared/http/response";

type NetlifyEvent = {
  path: string;
  httpMethod: string;
};

export async function handler(event: NetlifyEvent) {
  if (event.httpMethod !== "GET") {
    return jsonResponse(405, {
      error: "method_not_allowed",
      message: "This route only accepts GET requests.",
    });
  }

  const route = event.path.replace(/^\/api/, "") || "/";

  if (route === "/health") {
    return jsonResponse(200, { ok: true });
  }

  return notFoundResponse();
}
