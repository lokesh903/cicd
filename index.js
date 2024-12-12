// importing express framework
const express = require("express");
const app = express();
// Respond with "hello world" for requests that hit our root "/"
app.get("/cicd-test", function (req, res) {
 return res.send("Server is running test1");
});
// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});
module.exports = app;