const fs = require("fs");

const filePath = process.argv[2];

console.log(filePath);

if (!filePath) {
  console.log("Please Write Path");
  process.exit(1);
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("reading File", err);
    return;
  }
  console.log(data);
});
