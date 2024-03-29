const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// 직렬화: 프로그램의 오브젝트에 담긴 데이터를 외부 파일에 쓰거나 전송하는 것: write
passport.serializeUser((user, done) => {
  // console.log("serializeUser");
  done(null, user.id);
});

// 역직렬화: 외부 파일의 데이터를 프로그램 내의 오브젝트로 읽어오는 것: read
passport.deserializeUser((id, done) => {
  // console.log("deserializeUser");
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
