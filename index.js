const express = require("express"); //require the express package
const app = express(); //create an app using the express package
const port = 3000; //set port to 3000

const axios = require("axios"); // require the axios package



app.use("/", express.static("public"));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
