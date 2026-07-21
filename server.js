import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8000;

const options = {
  key: fs.readFileSync("./cert/private-key.pem"),
  cert: fs.readFileSync("./cert/certificate.pem"),
};

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact": "contact.html",
};

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function sendFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {
        "content-Type": "text/plain",
      });
      return res.end("404 File Not Found");
    }
    res.writeHead(200, {
      "content-Type": contentType,
    });
    res.end(data);
  });
}

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
