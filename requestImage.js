const request = require("request");
const fs      = require("fs");

const completionMessage = () => {
  console.log("Image download complete.");
};

console.log("Initiating image download");
request.get("https://sytantris.github.io/http-examples/future.jpg")
       .on("error", (err) => {
         throw err;
       })
       .on("response", (res) => {
         console.log(`Response Status Code: ${res.statusCode}\n
           Status Message${res.statusMessage}\n
           Content Type: ${res.headers["content-type"]}`);
       })
       .pipe(fs.createWriteStream("./future.jpg")),
       completionMessage();
