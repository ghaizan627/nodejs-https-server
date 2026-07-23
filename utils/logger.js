function logger(req) {
  console.log(`${req.method} ${req.url}`);
}

export default logger;
