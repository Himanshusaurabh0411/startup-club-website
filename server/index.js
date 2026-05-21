import cors from "cors";
import express from "express";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { clubData } from "../src/data/clubData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, service: "startup-club-api" });
});

app.get("/api/club-data", (_request, response) => {
  response.json({
    ...clubData,
    generatedAt: new Date().toISOString()
  });
});

app.post("/api/interest", (request, response) => {
  const { name, email, interest } = request.body || {};

  if (!name || !email || !interest) {
    return response.status(400).json({
      ok: false,
      message: "Name, email, and interest are required."
    });
  }

  return response.status(201).json({
    ok: true,
    message: "Interest recorded locally.",
    lead: { name, email, interest }
  });
});

const distPath = path.resolve(__dirname, "../dist");
if (existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get(/.*/, (_request, response) => {
    response.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Startup Club API running on http://localhost:${port}`);
});
