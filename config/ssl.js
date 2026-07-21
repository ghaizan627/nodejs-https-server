import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  key: fs.readFileSync(path.join(__dirname, "..", "cert", "private-key.pem")),

  cert: fs.readFileSync(path.join(__dirname, "..", "cert", "certificate.pem")),
};

export default options;
