const express = require("express");
const app = express();
const { PORT, CLIENT_URL } = require("./constants");
const authRoutes = require("./routes/auth");
const cookieparser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");

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
      console.log(`App running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();
