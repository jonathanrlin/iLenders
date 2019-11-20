const path = require("path");
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./server/models/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/dist")));

//passport config
app.use(
  require("express-session")({
    secret: "secret code goes here",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

require("./server/config/mongoose");
require("./server/config/routes")(app);
app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dist/index.html"));
});

app.listen(3000, () => console.log("listening on port 3000"));
