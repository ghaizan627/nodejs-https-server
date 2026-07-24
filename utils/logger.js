import fs from "fs";

function logger(req) {
  const time = new Date();
  const log = `[${time.toLocaleString()}] ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile("./logs/access.log", log + "\n", (err) => {
    if (err) throw err;
  });
}

export default logger;
