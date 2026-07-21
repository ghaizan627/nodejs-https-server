import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import mimeTypes from "./utils/mimeTypes.js";
import sendFile from "./utils/sendFile.js";
import routes from "./routes/routes.js";
import options from "./config/ssl.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8000;

const serverSsl = https.createServer(options, (req, res) => {
  const url = req.url;
  const fileName = routes[req.url];
  if (
    url.startsWith("/css/") ||
    url.startsWith("/js/") ||
    url.startsWith("/img/")
  ) {
    const filePath = path.join(__dirname, "public", url);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || "application/octet-stream";
    return sendFile(res, filePath, contentType);
  }

  if (!fileName) {
    res.writeHead(404, {
      "content-Type": "text/plain",
    });
    return res.end("404 Not Found");
  }
  const filePath = path.join(__dirname, "public", fileName);
  sendFile(res, filePath, "text/html");
});

serverSsl.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
