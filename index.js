const express = require("express"); //require the express package
const app = express(); //create an app using the express package
const port = 3000; //set port to 3000

const testRoutes = require("./routes/myTestRoutes");

const fakestoreRoutes = require("./routes/fakestoreRoutes");

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", express.static("public"));

app.use("/mytest", testRoutes);

app.use("/fakestore", fakestoreRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
