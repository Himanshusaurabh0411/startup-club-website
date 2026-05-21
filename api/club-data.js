import { clubData } from "../src/data/clubData.js";

export default function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ ok: false, message: "Method not allowed" });
  }

  return response.status(200).json({
    ...clubData,
    generatedAt: new Date().toISOString()
  });
}
