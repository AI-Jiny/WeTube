import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import passport from "passport";
import User from "./models/User";
import {
  githubLoginCallback,
  facebookLoginCallback,
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `https://rare-crab-34.loca.lt${routes.facebookCallback}`,
    },
    facebookLoginCallback
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);
