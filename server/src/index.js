const express = require("express");
const app = express();
const { CLIENT_URL, PORT } = require("./constants");
const authRoutes = require("./routes/auth");
const cookieparser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");

// redirected client side to run on server
const path = require("path");
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build/");

app.use(express.static(buildPath));

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

//

// middleware init
app.use(express.json());
app.use(cookieparser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
require("./middlewares/passport-middleware");
app.use(passport.initialize());

// routes init
app.use("/api", authRoutes);

const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();
