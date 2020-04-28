const express = require("express");
const carsRouter = require("./cars/cars-router");
const welcomeRouter = require("./welcome/welcome-router");
const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());
server.use("/",welcomeRouter);
server.use("/cars", carsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(port, () => {
  console.log(`server listening on port ${port} `);
});
