const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    console.log("logout", req.user);
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    // console.log("current_user");
    // console.log(req.session);
    // res.send(req.session);
    res.send(req.user);
  });
};
