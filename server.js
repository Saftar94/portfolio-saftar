const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use("/login", (req, res) => {
  res.send({
    token: "Hello token",
  });
});

app.listen(8082, () =>
  console.log("API работает на http://localhost:8082/login")
);
