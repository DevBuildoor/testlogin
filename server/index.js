const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const cookieParser = require("cookie-parser");

const { signIn, welcome, refresh } = require("./handlers");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/signin", signIn);
app.get("/welcome", welcome);
app.post("/refresh", refresh);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
