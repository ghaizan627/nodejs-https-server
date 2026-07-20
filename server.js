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

const serverSsl = https.createServer(options, (req, res) => {
  const fileName = routes[req.url];

  if (!fileName) {
    res.writeHead(404, {
      "content-type": "text/plain",
    });
    return res.end("404 Not Found");
  }

  const filePath = path.join(__dirname, "public", fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, {
        "content-type": "text/plain",
      });
      return res.end("Internal Server Error");
    }
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(data);
  });
});

serverSsl.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
