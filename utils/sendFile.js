import fs from "fs";
function sendFile(res, statusCode = 200, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {
        "content-Type": "text/plain",
      });
      return res.end("404 File Not Found");
    }
    res.writeHead(statusCode, {
      "content-Type": contentType,
    });
    res.end(data);
  });
}

export default sendFile;
