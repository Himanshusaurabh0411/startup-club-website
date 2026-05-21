async function readBody(request) {
  if (request.body && typeof request.body === "object") {
    return request.body;
  }

  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { name, email, interest } = await readBody(request);

    if (!name || !email || !interest) {
      return response.status(400).json({
        ok: false,
        message: "Name, email, and interest are required."
      });
    }

    return response.status(201).json({
      ok: true,
      message: "Interest received.",
      lead: { name, email, interest }
    });
  } catch (error) {
    return response.status(400).json({
      ok: false,
      message: "Invalid JSON body."
    });
  }
}
