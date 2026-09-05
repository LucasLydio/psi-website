export function jsonResponse(statusCode: number, body: unknown) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
    body: JSON.stringify(body),
  };
}

export function notFoundResponse() {
  return jsonResponse(404, {
    error: "not_found",
    message: "Route not found.",
  });
}
